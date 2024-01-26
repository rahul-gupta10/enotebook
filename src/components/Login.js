import React from 'react'

export default function Login() {
  return (
    <>
      <div className="login">
      <div className="container col-sm-5  my-4 loginform" style={{padding:"20px"}}>
      <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input autoComplete="on" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input autoComplete="off" type="password" className="form-control" id="password"/>
            <div id="passwordhelp" className="form-text"></div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      </div>
    </>
  )
}
