import React from 'react';
import {useState, useEffect} from 'react';
import DeletePokemon from './DeletePokemon.js'
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import PokemonRouter from'./pokemon/pokemonRouter.js'




function PokemonList()




{
  const navStyle = {
    color: 'white'
  }
  
useEffect(() => {
  fetchItems()

}, []);

const [items, setItems] = useState([]);

const fetchItems = async () => {
  const data = await fetch('api link');
 
  const items = await data.json();
  console.log(items);
}
    return (
     
<div>
      <h1> View pokemon

      </h1>  
       <Link  to="/DeletePokemon">Delete the Pokemon</Link>

       <Link    to="/FilterPokemon">Filter Pokemons</Link>

       <Link    to="/">Home Page</Link>
      
       </div>

    );

  }

 

  export default PokemonList;