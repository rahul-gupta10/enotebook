import React from 'react'

function NoteItem(props) {
  const edit = () => {
    props.showAlert("Text Copied")
  }
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" style={{ position: "relative" }} id="headingOne">
          <div className="col-sm-10 col-9">
            <i onClick={edit} className="fa-regular fa-pen-to-square edit " style={{ position: "absolute", right: "8%",top:"14px" }}></i>
            <i className="fa-solid fa-trash trash" style={{ position: "absolute", right: "1%",top:"14px" }}></i>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.collapseid}`} aria-expanded="true" aria-controls={props.collapseid}>
              <strong>Title:- {props.title}</strong>
              <span className ="lastmodify"style={{ fontSize: "12px", position: "absolute", right: "50px" }}>{"Last modified:- " + props.modifydate}</span>
            </button>
          </div>
        </h2>
        <div id={props.collapseid} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <span className ="midlastmodify"style={{ fontSize: "12px"}}>{"Last modified:- " + props.modifydate}</span><br/>
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
