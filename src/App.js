import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import NoteState from './contex/notes/NoteState';
import MyNotes from './components/MyNotes';
import Alert from './components/Alert';
import { useState } from 'react';
import ChangePassword from './components/ChangePassword';

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert = (message) =>{
    setAlert(message)
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
    <NoteState showAlert={showAlert}>
      <Router>
        <Navbar showAlert={showAlert}/>
        <div style={{height:"20px",backgroundColor:"rgb(228, 236, 234)"}}>
        <Alert msg={alert}/>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
            <Route path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/changePassword" element={<ChangePassword showAlert={showAlert}/>}/>
            <Route path="/myNotes" element={<MyNotes showAlert={showAlert}/>}/>      
        </Routes>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
