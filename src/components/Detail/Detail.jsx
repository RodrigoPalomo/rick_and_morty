import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);


  console.log(params)
  return (
    <div>
      <h1>
        Detail
      </h1>
    </div>
  )
}

export default Detail
