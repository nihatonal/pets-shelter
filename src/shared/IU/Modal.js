import React from "react";
import ReactDOM from 'react-dom';

//import Close from '../assets/image/close.svg';

import "./Modal.css";

const Modal = (props) => {

    const content = (
        <div className={`modal-container ${props.className}`}  style = {props.style}>
        <div className={`modal-content-wrapper ${props.classContent}`}>
          {/* <img className="close" src={Close} alt="close" onClick={props.Close}/> */}
          <img src={props.img} alt={props.name} />
          <div className={"modal-content"}>
                  <h3>{props.name}</h3>
                  <h4>{props.breed}</h4>
                  <h5>{props.desc}</h5>
              <ol>
                  <li><span>Age:</span>{props.age}</li>
                  <li><span>Inoculations:</span>{props.inoculations}</li>
                  <li><span>Diseases:</span>{props.diseases}</li>
                  <li><span>Parasites:</span>{props.parasites}</li>
                  
              </ol>
          </div>
  
        </div>
      </div>
    );

  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

export default Modal;