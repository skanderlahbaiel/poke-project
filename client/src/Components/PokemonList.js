import React from "react";
import { useState, useEffect } from "react";
import DeletePokemon from "./DeletePokemon.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function PokemonList() {
  const [listOfPokemons, setListOfPokemons] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:7500/pokemons").then((response) => {
      setListOfPokemons(response.data);
    });
  }, []);

const deleteOnePokemon = (number) => {

  axios.delete (`http://localhost:7500/pokemons/${number}`)
  .then(()=> {

  })

} 

  const navStyle = {
    color: "white",
  };

  return (
    <div>
      <h1> List Of Pokemons</h1>

      <div className="Poke">
        <span className="name">Name</span>
        {listOfPokemons.map((pokemon) => {
          console.log("test");
          return (
            <div>
              {" "}
              <p>{pokemon.name}</p> <p>{pokemon.number}</p>{" "}
              <p>{pokemon.types}</p> <img src={pokemon.imageUrl} alt="" />
              <p>{pokemon.imageUrl}</p>
              <button onClick={deleteOnePokemon(pokemon.number)}>Delete your pokemon </button>

            </div>
          );
        })}
      </div>

      <div>
        <span className="Number">Number</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.number}</p>;
        })}
      </div>

      <div>
        <span className="Type">Type</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.types}</p>;
        })}
      </div>

      <div>
        <span className="imgUrl">imgUrl</span>
        {listOfPokemons.map((pokemon) => {
          return <p>{pokemon.imgageUrl}</p>;
        })}
      </div>
      <Link to="/DeleteOnePokemon">Delete the Pokemon</Link>

      <Link to="/FilterPokemon">Filter Pokemons</Link>
      <Link to="/">Home Page</Link>
    </div>
  );
}

export default PokemonList;
