import React, { useState } from 'react'
// import NoteContext from '../contex/notes/NoteContext';

export default function Signup() {
  // const context = useContext(NoteContext)
  // const {deleteNote} = context;
  
// eslint-disable-next-line
  const [signup , setSignup]  = useState({
    username:"",
    email:"",
    password:""
  })
  
  const signUpHandle = (e)=>{
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if(password===confirmpassword){
      document.getElementById("help").innerHTML=""
      setSignup({username:username,email:email,password:password})
    }else{
      document.getElementById("help").innerHTML="Password are not same!"
    }
  }
  return (
    <>
      <div className="mainsignup"></div>
      <div className="container col-sm-5 my-4 signup" style={{padding:"20px"}}>
      <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
            <input autoComplete="on" type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input  autoComplete="on" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input  autoComplete="off" type="password" className="form-control" id="password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="CPassword" className="form-label">Confirm Password</label>
            <input autoComplete="off"  type="password" className="form-control" id="confirmpassword"/>
            <div id="help" className="form-text" style={{color:"red",fontSize:"17px"}}></div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={signUpHandle}>Sign Up</button>
        </form>
      </div>
      
    </>
  )
}
