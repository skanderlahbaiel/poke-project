import React from 'react';

import AddNewPokemon from './AddNewPokemon.js';

import { Link } from 'react-router-dom';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Navbar() {


const navStyle = {
    color: 'black'
}

  return (

   

    <nav>

        <h3>Poke-Mongo</h3>

        <ul className='nav-links'>

           

                
                 <Link style={navStyle} to="/Viewpokemons">View Pokemons</Link>
                 
                 <Link style={navStyle} to="/AddNewPokemons">Add New Pokemon</Link>
                 <Link style={navStyle} to= "/EditPokemon">Edit a Pokemon</Link>
           

           


           



        </ul>

    </nav>

  );

}



export default Navbar;