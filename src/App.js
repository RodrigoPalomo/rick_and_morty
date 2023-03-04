import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTES
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
// COMPONENTES

function App() {
  const [characters, setCharacters] = useState([]);

  let onClose = (id) => {
    // const newCharacters = characters.filter((character) => character.id !== id);
    // setCharacters(newCharacters);
    setCharacters(characters.filter((character) => character.id !== id));
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <div>
        <Cards onClose={onClose} characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App;
