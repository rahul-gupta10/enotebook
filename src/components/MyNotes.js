import React ,{useContext, useEffect, useState}from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../contex/notes/NoteContext'
import { useNavigate } from 'react-router-dom'

function MyNotes(props) {
  let history = useNavigate();
  const [work,setWork] = useState("Add")
  const [id,setId] = useState()
  const context = useContext(NoteContext)
  const {notes, addNote,fetchNote,upDateNote} = context;
  const[note,setNote,] = useState({title:"",description:""})
  const[data,setData,] = useState({title:"",description:""})
  useEffect(() => {
    if(!sessionStorage.getItem("authtoken")){
      props.showAlert("Please login first")
      history("/login")
    }
    else{
      fetchNote();
    }
    // eslint-disable-next-line
  },[])

  const addNoteHandle=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description);
    document.getElementById("title").value="";
    document.getElementById("description").value="";
    document.getElementById("closeModel").click();
  }
  const updateHandle=(e)=>{
    e.preventDefault();
    upDateNote(id,note.title,note.description)
    document.getElementById("title").value="";
    document.getElementById("description").value="";
    document.getElementById("closeModel").click();
  }

  const onChangeHandler=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    setData({...data,[e.target.name]:e.target.value})

  }
  return (
    <>
      <div className="mainNoteItem">
        <div className="container">
          <div style={{ display: "hidden" }}>.</div>
          <div className="d-grid gap-2 col-10 col-sm-2 mx-auto my-3">
            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addnotes" onClick={()=>{setWork("Add");setData({title:"",description:""})}}>Add Notes +</button>
          </div>
          <div className="accordion my-3" id="accordionExample">
          {
            notes.map((element)=>{
              return <NoteItem key={element._id} lastmodify={element.lastmodified} showAlert={props.showAlert} title={element.title} description={element.description}
               collapseid={"element"+element._id} id={element._id} setData={setData} setWork={setWork} setId={setId}/>
              
            })
          }
          </div>
        </div>
      </div>

      {/* Model */}
      <div className="modal fade" id="addnotes" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> {work} notes in you collection</h5>
              <button type="button"id='closeModel' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className=" " style={{ padding: "20px" }}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input autoComplete="off" type="text" className="form-control" value={data.title} name="title" id="title" aria-describedby="emailHelp" onChange={onChangeHandler}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea rows={10} autoComplete="off" type="text" value={data.description} className="form-control" name="description" id="description" onChange={onChangeHandler}/>
                    <div id="passwordhelp" className="form-text"></div>
                  </div>
                  {
                    work==="Add"?<button type="submit" className="btn btn-primary " id='addNote' onClick={addNoteHandle}>Add Note</button>:
                    <button className="btn btn-primary " onClick={updateHandle}>Update Note</button>
                  }
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyNotes
