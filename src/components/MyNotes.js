import React ,{useContext}from 'react'
import NoteItem from './NoteItem'
import NoteContext from '../contex/notes/NoteContext'

function MyNotes(props) {
  let action = "Add";
  const context = useContext(NoteContext)
  const {note , setNote} = context;
  return (
    <>
      <div className="mainNoteItem">
        <div className="container">
          <div style={{ display: "hidden" }}>.</div>
          <div className="d-grid gap-2 col-10 col-sm-2 mx-auto my-3">
            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#addnotes">Add Notes +</button>
          </div>
          <div className="accordion my-3" id="accordionExample">
          {
            note.map((element)=>{
              return <NoteItem showAlert={props.showAlert} title={element.title} description={element.description} collapseid={element.title}/>
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
              <h5 className="modal-title" id="exampleModalLabel">{action} notes in you collection</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className=" " style={{ padding: "20px" }}>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input autoComplete="off" type="text" className="form-control" id="email" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea rows={10} autoComplete="off" type="text" className="form-control" id="password" />
                    <div id="passwordhelp" className="form-text"></div>
                  </div>
                  <button type="submit" className="btn btn-primary">Add</button>
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
