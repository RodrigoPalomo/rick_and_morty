import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

export default function Card(props) {
	let handleClose = (id) => {
		props.onClose(id);
		// props.deleteCharacterFavourite(Number(event.currentTarget.value));
	};
   return (
      <div className="main-container-card">
         <div className="container-card">
            <div className="container-btn-card">
               <button className="btn-card" onClick={() => handleClose(props.id)}>X</button>
            </div>
            <div className="container-names-card">
               <div className="container-characteristics">
                  <h2 className="species-card">{props.species}</h2>
                  <h2 className="gender-card">{props.gender}</h2>
               </div>
               <div className="container-image-card">
                  <img className="image-card" src={props.image} alt="img" />
                  <Link to={`detail/${props.id}`} >
                  <h2 className="name-card">{props.name}</h2>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
