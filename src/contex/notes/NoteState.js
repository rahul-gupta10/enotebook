import noteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const test =[
        {
            "title" : "rahul",
            "description":"dubakdjadssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
            "title" : "test",
            "description":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,"
        }
    ]
    
    const [ note , setNote] = useState(test);
    
    return(
    <noteContext.Provider value={{note , setNote}}>
        {props.children}
    </noteContext.Provider>
)}
export default NoteState;