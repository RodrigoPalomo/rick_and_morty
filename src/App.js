import React, { useState } from "react";
import "./App.css";
// import Card from './components/Card/Card.jsx'
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
// import SearchBar from './components/SearchBar/SearchBar'
// import characters, { Rick } from './data.js'

function App() {
  const [characters, setCharacters] = useState([]);
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

  let onClose = (id) => {
    const newCharacters = characters.filter(
      (character) => character.id !== id
    )
    setCharacters(newCharacters);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div> */}
      <Nav onSearch={onSearch} />
      <hr />
      <div>
        <Cards onClose={onClose} characters={characters} />
      </div>
      <hr />
      {/* <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div> */}
    </div>
  );
}

export default App;
