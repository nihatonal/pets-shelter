import React from "react";
// import { v4 as uuid_v4 } from "uuid";
import "./Card.css";

const Card = (props) => {
    return (
        <div className={`card-wrapper ${props.className}`} id={props.id}>
            {props.children}
        </div>
    )
}
// const Card = ({ item, click }) => {
//   return (
//     <>
//       {item.map((Val, index) => {
//         return (
//           <div className="card-wrapper" key={uuid_v4()} id={Val.id}>
//             <img src={Val.image} alt={Val.name} />
//             <p className="card-name">{Val.name}</p>
//             <button className="card-btn" onClick={() => click(Val.id)}>
//               Learn more
//             </button>
//           </div>
//         );
//       })}
//    </>
//   );
// };

export default Card;
