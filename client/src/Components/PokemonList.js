import React from 'react';
import {useState, useEffect} from 'react';



function PokemonList() {
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

      <h1> View pokemon

      </h1>

    );

  }

 

  export default PokemonList;