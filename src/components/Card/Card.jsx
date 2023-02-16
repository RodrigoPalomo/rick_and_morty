import React from "react";
import './Card.css';

export default function Card({ name, species, gender, image, onClose }) {
   return (
      <div className="main-container-card">
         <div className="container-card">
            <div className="container-btn-card">
               <button className="btn-card" onClick={onClose}>X</button>
            </div>
            <div className="container-names-card">
               <div className="container-characteristics">
                  <h2 className="species-card">{species}</h2>
                  <h2 className="gender-card">{gender}</h2>
               </div>
               <div className="container-image-card">
                  <img className="image-card" src={image} alt="img" />
                  <h2 className="name-card">{name}</h2>
               </div>
            </div>
         </div>
      </div>
   );
}
