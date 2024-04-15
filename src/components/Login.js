import React,{useState,useContext} from 'react'
import { useNavigate  } from "react-router-dom";
import noteContext from '../contex/notes/NoteContext';

export default function Login(props) {
  let context = useContext(noteContext)
  let history = useNavigate();
  const [cred, setCred] = useState({
    email: "",
    password: ""
  })
  
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  const loginHandle = async (e) => {
    e.preventDefault();
      try {
        const res = await fetch(`http://localhost:5000/api/auth/login`, {
          method: 'POST',
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify({email:cred.email,password:cred.password})
        });
        const result = await res.json()
        if (result.success) {
          setCred({
            email: "",
            password: ""    
          })
          sessionStorage.setItem("authtoken",result.authtoken)
          await context.fetchUser(result.authtoken)
          history("/myNotes");
        }
        else {
          props.showAlert("Bad credentials");
        }

      } catch (error) {
        console.log(error)
      }
  }



  return (
    <>
      <div className="login">
      <div className="container col-sm-5  my-4 loginform" style={{padding:"20px"}}>
      <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input autoComplete="on" type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={cred.email} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input autoComplete="off" type="password" className="form-control" name='password' id="password" value={cred.password} onChange={onChange}/>
            <div id="help" className="form-text"></div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={loginHandle}>Login</button>
        </form>
      </div>
      </div>
    </>
  )
}
