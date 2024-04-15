import React, { useState,useContext } from 'react'
import { useNavigate } from "react-router-dom";
import noteContext from '../contex/notes/NoteContext';

export default function Signup(props) {
  let history = useNavigate();
  let context = useContext(noteContext)
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  })

  const onChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
  }

  const signUpHandle = async (e) => {
    e.preventDefault();
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (password === confirmpassword) {
      document.getElementById("help").innerHTML = ""
      try {
        console.log("object")
        const res = await fetch(`http://localhost:5000/api/auth/createUser`, {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({ name: signup.username, email: signup.email, password: signup.password })
        });
        const result = await res.json()
        if (result.success) {
          setSignup({
            username: "",
            email: "",
            password: "",
            confirmpassword: ""
          })
          sessionStorage.setItem("authtoken",result.authtoken)
          await context.fetchUser(result.authtoken)
          history("/myNotes");
        }
        else {
          props.showAlert("Failed to create user!!" +result.error);
        }

      } catch (error) {
        console.log(error)
      }
    } else {
      document.getElementById("help").innerHTML = "Password are not same!"
    }
  }
  return (
    <>
      <div className="mainsignup"></div>
      <div className="container col-sm-5 my-4 signup" style={{ padding: "20px" }}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
            <input autoComplete="on" type="text" className="form-control" name="username" value={signup.username} aria-describedby="emailHelp" onChange={onChange} />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input autoComplete="on" type="email" className="form-control" name="email" value={signup.email} aria-describedby="emailHelp" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input autoComplete="off" type="password" className="form-control" value={signup.password} id="password" name="password" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="CPassword" className="form-label">Confirm Password</label>
            <input autoComplete="off" type="password" className="form-control" value={signup.confirmpassword} id="confirmpassword" name="confirmpassword" onChange={onChange} />
            <div id="help" className="form-text" style={{ color: "red", fontSize: "17px" }}></div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={signUpHandle}>Sign Up</button>
        </form>
      </div>

    </>
  )
}
