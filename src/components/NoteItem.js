import React,{useContext} from 'react'
import NoteContext from '../contex/notes/NoteContext';

function NoteItem(props) {
  const context = useContext(NoteContext)
  const {deleteNote} = context;
  
  const updateHandler=()=>{
    props.setWork("Update");
    props.setId(props.id)
    props.setData({
      title:props.title,
      description: props.description
    })

  }
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" style={{ position: "relative" }} id="headingOne">
          <div className="col-sm-10 col-9">
            <i onClick={updateHandler} data-bs-toggle="modal" data-bs-target="#addnotes" className="fa-regular fa-pen-to-square edit " style={{ position: "absolute", right: "8%",top:"14px" }}></i>
            <i className="fa-solid fa-trash trash" style={{ position: "absolute", right: "1%",top:"14px" }} onClick={()=>{deleteNote(props.id)}}></i>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.collapseid}`} aria-expanded="true" aria-controls={props.collapseid}>
              <strong>Title:- {props.title}</strong>
              <span className ="lastmodify"style={{ fontSize: "12px", position: "absolute", right: "50px" }}>{"Last modified:- " + props.lastmodify.slice(0,10)+ " "+props.lastmodify.slice(11,16)+" IST"}</span>
            </button>
          </div>
        </h2>
        <div id={props.collapseid} className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {props.description}
          </div>
        </div>
      </div>
    </>
  )
}
NoteItem.defaultProps = {
  title: "Failed to fetch title",
  description: "Failed to fetch description"
}
export default NoteItem
