import React, {  } from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'


function Navbar() {
  let location = useLocation();
  let history = useNavigate()
  const logoutHandle = () =>{
    sessionStorage.removeItem("authtoken")
    sessionStorage.removeItem("username")
    history("/")
  }
  return (
    <>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <Link className="navbar-brand" to='/'>EnoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mx-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contactus' ? "active" : null}`} aria-current="page" to="/contactus">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/myNotes' ? "active" : null}`} to="/myNotes">My Notes</Link>
              </li>
              {
                !sessionStorage.getItem("authtoken")?
                  <>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/login' ? "active" : null}`} aria-current="page" to="/login">Login</Link>
                    </li>
                    <div className='mx-2 my-auto line' style={{ border: "1px solid grey", height: "20px"}}></div>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/signup' ? "active" : null}`} to="/signup">Sign Up</Link>
                    </li>
                  </>
                  :
                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {sessionStorage.getItem("username")}
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/">Action</Link></li>
                      <li><Link className="dropdown-item" to="/changePassword">Change Password</Link></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><span className="dropdown-item" onClick={logoutHandle}>Log out</span></li>
                    </ul>
                  </li>
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  )

}

export default Navbar
