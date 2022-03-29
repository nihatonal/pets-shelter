import React from "react";
import {HelpData} from "../../assets/HelpData";

import "./Help.css";

const Help = () => {
  return (
    <div className="section-help" >
      <h3 className="section-content-title">How you can help our shelter</h3>
        <div className="section-help-content">
            {HelpData.map((item)=>(
                <div className="card-help" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h4 className="card-help-name">{item.name}</h4>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Help;
