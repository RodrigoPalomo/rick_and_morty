import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar(props) {

   const [inputChar, setInputChar] = useState('');
   let handleChange = (event) => {
      setInputChar(event.target.value)
   }
   return (
      <div className="main-container-search">
         <input type='search' className="bar-search" placeholder="Buscar..." onChange={handleChange} value={inputChar} />
      <button className="btn-search" onClick={() => props.onSearch(inputChar)} type="button">Agregar Personaje</button>
      </div>
   );
}
