import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL } from "./constants/base_url";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  console.log(axios.get("https://swapi.py4e.com/api/people/"));
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([
    {
      name: "ALDO MATA",
    },
    {
      name: "is the greatest",
    },
  ]);

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get(`${BASE_URL}people/`)
        .then((res) => {
          console.log(res.data);
          setCharacters(res.data.results);
        })
        .catch((err) => {
          console.log(err);
          debugger;
        });
    };
    getCharacters();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">STAR WARS CHARACTERS!</h1>
      {characters.map((character) => {
        return (
          <Character
            key={character.name}
            name={character.name}
            gender={character.gender}
            birthYear={character.birth_year}
            height={character.height}
            mass={character.mass}
          ></Character>
        );
      })}
    </div>
  );
};

export default App;
