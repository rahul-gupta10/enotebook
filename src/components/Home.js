import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
 
  return (
    <>
    <div className="container main-container">
      <div className="text-center home">
        <h1 className='text-center my-3 home-text'>Its your workspace to create <br/> you Notebooks</h1>
        <h6 className=''>
          You can find you all notes on any time by just login <br/>into your account using you browser.
        </h6>
        <Link to='/signup' ><button className='btn btn-primary my-3'>Sign Up</button></Link>
        <hr></hr>
        <div className="position-relative">
            <img alt="img" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
        </div>
      </div>
    </div>
    </>
  )
}
