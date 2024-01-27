import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{   
    const [ notes , setNote] = useState([]);

    const fetchNote=async()=>{
        const res = await fetch(`http://localhost:5000/api/notes/fetchnotes`,{
        method:'GET',
        headers:{
            "Content-Type":'application/json',
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMTQyMjFiNTBjODU2NjEzYmI5Y2VjIn0sImlhdCI6MTcwNjE2NTM3MX0.OVeS5KJf17iV29LA3aku8CeNeWRyI5OcJKG1hn32t1M"
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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMTQyMjFiNTBjODU2NjEzYmI5Y2VjIn0sImlhdCI6MTcwNjE2NTM3MX0.OVeS5KJf17iV29LA3aku8CeNeWRyI5OcJKG1hn32t1M"
        },
        body:JSON.stringify({title,description})
        });
         res.json()
        
        if(res.status===200){
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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMTQyMjFiNTBjODU2NjEzYmI5Y2VjIn0sImlhdCI6MTcwNjE2NTM3MX0.OVeS5KJf17iV29LA3aku8CeNeWRyI5OcJKG1hn32t1M"
        },
        });
        if(res.status===200){
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
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViMTQyMjFiNTBjODU2NjEzYmI5Y2VjIn0sImlhdCI6MTcwNjE2NTM3MX0.OVeS5KJf17iV29LA3aku8CeNeWRyI5OcJKG1hn32t1M"
        },
        body:JSON.stringify({title,description})
        });
         res.json()
        if(res.status ===200){
            props.showAlert("Note updated..")
        }
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element.id===id){
                element.title=title;
                element.description=description
            }
            
        }
        
    }
    
    return(
    <noteContext.Provider value={{notes,fetchNote, addNote, deleteNote, upDateNote }}>
        {props.children}
    </noteContext.Provider>
)}
export default NoteState;