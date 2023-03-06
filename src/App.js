import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// COMPONENTES
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
// COMPONENTES

function App() {
  const [characters, setCharacters] = useState([]);

  let onClose = (id) => {
    const newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
    // setCharacters(characters.filter((character) => character.id !== id));
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
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
      <Routes>
        <Route path="/" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail:detailId" element={<Detail />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
