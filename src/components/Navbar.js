import React, {  } from 'react'
import { Link, useLocation} from 'react-router-dom'

function Navbar() {
  let location = useLocation();
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
                <Link className={`nav-link ${location.pathname === '/contactus'?"active" :null}`} aria-current="page" to="/contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/myNotes'?"active" :null}`} to="/myNotes">My Notes</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/login'?"active" :null}`} aria-current="page" to="/login">Login</Link>
                </li>
                <div className='mx-2 my-auto' style={{border:"1px solid grey",height:"20px"}}></div>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/signup'?"active" :null}`} to="/signup">Sign Up</Link>
                </li>
            </ul>
            </div>  
        </div>
    </nav>
    </>
  )
  
}

export default Navbar
