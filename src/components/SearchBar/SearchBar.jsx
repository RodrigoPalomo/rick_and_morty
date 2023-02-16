import React from "react";
import './SearchBar.css'

export default function SearchBar(props) {
   return (
      <div className="main-container-search">
         <input type='search' className="bar-search" placeholder="Buscar..." />
      <button className="btn-search" onClick={()=> {props.onSearch()}}>Agregar</button>
      </div>
   );
}
