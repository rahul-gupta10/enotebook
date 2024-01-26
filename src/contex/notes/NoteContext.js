import { createContext } from "react";
const noteContext = createContext();

export default noteContext;


{/* <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" style={{width:"85%"}} type="button" data-bs-toggle="collapse" data-bs-target={`#${props.collapseid}`} aria-expanded="true" aria-controls={props.collapseid}>
            <strong>Title:- {props.title}</strong>
            <i onClick={edit}className="fa-regular fa-pen-to-square fa-xl" style={{ position: "absolute", right: "50%" }}></i>
            <i className="fa-solid fa-trash fa-xl" style={{ position: "absolute", right: "55%" }}></i>
            <span style={{ fontSize: "12px", position: "absolute", right: "50px" }}>{"Last modified:- " + props.modifydate}</span>
          </button>
        </h2>
        <div id={props.collapseid} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            {props.description}
          </div>
        </div>
      </div> */}