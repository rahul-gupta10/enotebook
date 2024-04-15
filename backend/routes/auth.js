const express = require("express");
const router = express.Router();
const Users = require("../model/Users");
const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwt_sig = "rahulguptawiproworking";

//Route for user creation
router.post(  
  "/createUser",
  [
    body("name", "Name is not valid. It should minimum 3 Charecter").isLength({min: 3}),
    body("password","Please enter valied password, minimum 8 Alphanumeric").isLength({ min: 8}),
    body("email").isEmail(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    try 
    {
      if (result.isEmpty())
      {
        
        let success = false
        let user = await Users.findOne({ email: req.body.email });        //cehcking email if exist 
        if(user){
          return res.status(400).json({success:false, error: "User already exist" });
        }else{
          const salt = await bcrypt.genSalt(10);
          const password = await bcrypt.hash(req.body.password,salt);
          user = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
          });
          const data = {
            user:{id:user.id}
          }
          const authtoken = jwt.sign(data,jwt_sig);
          success=true;
          res.json({success,authtoken});
        }
      }else{
        const err = result.array()
        const error =[]
        err.map((err)=>{
          error.push({
            msg:err.msg,
            field:err.path
          })
        })

        return res.status(400).json({ success: false, error: error });
      }
    }catch (error) {
      res.status(500).send("something went wrong "+ error.message.msg);
      
    }
  }
);

//Route for user login
router.post('/login',async(req, res)=>{
  let user = await Users.findOne({email:req.body.email});
  let success = false;
  if (user){
    const details ={
      user:{id:user.id}
    }
    const enterpassword = await bcrypt.compare(req.body.password,user.password);
    if(enterpassword)
    {
      const authtoken = jwt.sign(details,jwt_sig);
      success=true;
      res.json({success,authtoken});
    }else{
      res.send({error:"Bad credentials"});
    }
    
  }else{
    res.send({error:"Bad credentials"});
  }

})

//Route for fetching user details Login required
router.post('/fetchuser',fetchUser,async(req, res)=>{
  try 
  {
    const user = await Users.findById(req.user.id).select("-password");
    res.send(user)
  } 
  catch (error) {
    res.status(500).send("something went wrong "+ error.message);
  }

})

router.post('/changepassword',fetchUser,async(req, res)=>{
  try 
  {
    let success = false
    const users = await Users.findById(req.user.id);
    const enterpassword = await bcrypt.compare(req.body.currentpassword,users.password);
    // console.log(enterpassword)
    if(enterpassword){
      if(req.body.newpassword === req.body.confirmpassword){
          const salt = await bcrypt.genSalt(10);
          const password = await bcrypt.hash(req.body.newpassword,salt);
          users.password=password
          await users.save();

          res.json({ message: 'Password updated successfully',success:true });
      }
      else{
        res.json("please enter same password for confirmation");
      }
    }
    else{
      res.json("Current password did not match");
    }
  } 
  catch (error) {
    res.status(500).send("something went wrong "+ error.message);
  }

})

module.exports = router;
