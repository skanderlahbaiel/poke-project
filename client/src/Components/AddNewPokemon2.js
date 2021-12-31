import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'react';
import {useState, useEffect} from 'react';


function AddNewPokemon2() {
    const [name, setName] = useState("");
    const [types, setType] = useState([]);
    const [number, setNumber] = useState(0);
    const [imageUrl, setimageUrl] = useState("");

    const [ListOfPokemons, setListOfPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
    axios.get("http://localhost:7500/pokemons").then((response) => {
    setListOfPokemons(response.data);
    setLoading(false);
    });
    },[]);
    const  createPokemon = () => {
    axios.post("http://localhost:7500/pokemons/pokemon", {name, number, types, imageUrl})
    .then((response)=>{ setListOfPokemons ([...ListOfPokemons, name, number, types, imageUrl])
        setLoading(false);

    })
    

}
if (isLoading) {
    return <div className="App">Loading...</div>;}

return(
    <div>
        <input type="text" placeholder="name" onChange={(event) => {setName(event.target.value);}}/>
        <input type="Number" placeholder="number" onChange={(event) => {setNumber(event.target.value);}}/>
        <input type="text" placeholder="types" onChange={(event) => {setType(event.target.value);}}/>
        <input type="text" placeholder="imageUrl" onChange={(event) => {setimageUrl(event.target.value);}}/>
        <button onClick = {createPokemon}>Add pokemon</button>
    </div>

)
}




















export default AddNewPokemon2;