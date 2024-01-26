import React from 'react'

export default function Signup() {
  return (
    <>
      <div className="mainsignup"></div>
      <div className="container col-sm-5 my-4 signup" style={{padding:"20px"}}>
      <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
            <input  autoComplete="off" type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input  autoComplete="off" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input  autoComplete="off" type="password" className="form-control" id="password"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input autoComplete="off"  type="password" className="form-control" id="confirmpassword"/>
            <div id="passwordhelp" className="form-text"></div>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
      
    </>
  )
}
