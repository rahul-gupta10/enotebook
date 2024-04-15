import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{   
    const [ notes , setNote] = useState([]);

    const fetchUser = async (token) =>{
        const res = await fetch(`http://localhost:5000/api/auth/fetchuser`,{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "auth-token": token
        },  
        });
        const data = await res.json()
        sessionStorage.setItem("username" ,data.name)
        
    }

    const fetchNote=async()=>{
        const res = await fetch(`http://localhost:5000/api/notes/fetchnotes`,{
        method:'GET',
        headers:{
            "Content-Type":'application/json',
            "auth-token":sessionStorage.getItem("authtoken")
        },  
        });
        const data = await res.json()
        setNote(data)

    }
    //add notes
    const addNote = async(title,description) =>{
        const res = await fetch(`http://localhost:5000/api/notes/insertnote`,{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "auth-token":sessionStorage.getItem("authtoken")
        },
        body:JSON.stringify({title,description})
        });
         await res.json()
        
        if(res.status===200){
            fetchNote();
            props.showAlert("Note Added");
        }
        else{
            props.showAlert("Fail to add")
        }
    }

    //delete notes
    const deleteNote = async(id)=>{
        const res = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":'application/json',
            "auth-token":sessionStorage.getItem("authtoken")
        },
        });
        if(res.status===200){
            fetchNote();
            props.showAlert("Note Deleted");
        }
        else{
            props.showAlert(res)
        }
    }


    //add notes
    const upDateNote = async(id,title,description)=>{
        const res = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type":'application/json',
            "auth-token":sessionStorage.getItem("authtoken")
        },
        body:JSON.stringify({title,description})
        });
         res.json()
        if(res.status ===200){
            fetchNote();
            props.showAlert("Note updated..")
        }
        
        
    }
    
    return(
    <noteContext.Provider value={{notes,fetchNote, addNote, deleteNote, upDateNote,fetchUser }}>
        {props.children}
    </noteContext.Provider>
)}
export default NoteState;