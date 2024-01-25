const express = require("express");
const router = express.Router();
const notes = require("../model/Notes");
const { body, validationResult } = require("express-validator");
const Notes = require("../model/Notes");
const fetchuser = require("../middleware/fetchUser");

//Inserting notes to database // login required
router.post(
  "/insertnote",
  fetchuser,
  [
    body("title", "Title length must be atleast 10 charecter").isLength({
      min: 5,
    }), //validation of the fields
    body(
      "description",
      "Description length must be atleast 10 charecter"
    ).isLength({ min: 10 }),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      try 
      { 
        Notes.create({
          //inserting data to table
          user: req.user.id,
          title: req.body.title,
          description: req.body.description,
        })
          .then((Users) => res.json(Users)) //if inserted then print the data
          .catch((err) => res.json({ message: err.message })); //if failed show error
        
      } catch (error) {
        res.send({ errors: error.message});
      }
      
    }else {
      res.send({ errors: result.array() }); //if validation failed then print error
    }
  }
);

//fetching notes from database for particular user // login required

router.get('/fetchnotes',fetchuser,async (req, res)=>{
  const notes = await Notes.find({user:req.user.id});
  res.send(notes);

})

//updating existing notes from database for particular user // login required

router.put('/updatenote/:id',fetchuser,[
  // body("title", "Title length must be atleast 10 charecter").isLength({min: 5}), //validation of the fields
  // body("description","Description length must be atleast 10 charecter").isLength({ min: 10 }),
],async (req, res)=>{
  try {
      const {title,description} =req.body;
      const newnote = {};
      if(title){newnote.title=title}
      if(description){newnote.description=description}
      const note =  await Notes.findById(req.params.id);
      if(!note){return res.status(404).send("Notes not found")};
      if(note.user !== req.user.id){return res.status(401).send("Action not allowed")}
      let notes = await Notes.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true});
      res.send(notes);
} catch (error) {
  res.send("something went wrong " +{errors: error.message});
}

})

//deleting notes 
//updating existing notes from database for particular user // login required

router.put('/deletenote/:id',fetchuser,async (req, res)=>{
  try {
      const note =  await Notes.findById(req.params.id);   //reading id of object from URL
      if(!note){return res.status(404).send("Notes not found")};
      if(note.user !== req.user.id){return res.status(401).send("Action not allowed")} //checking if logged in user and object user are same or not
      const notes = await Notes.findByIdAndDelete(req.params.id);
      res.send("Notes deleted");
} catch (error) {
  res.status(500).send("something went wrong "+ error.message);
}

})

module.exports = router;


