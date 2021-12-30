import React from 'react';

import './App.css';

import Navbar from './Components/Navbar.js';

import PokemonList from './Components/PokemonList.js';

import AddNewPokemon from './Components/AddNewPokemon.js';

import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';



function App() {
  return (
    
<Router>
    <div className="App">
    
     <Navbar/>
     <Routes>
     <Route path='/AddNewPokemons' element={<AddNewPokemon/>}/>
     <Route path='/Viewpokemons' element={<PokemonList/>}/>
    '</Routes>
     
     

   
   
</div>  
</Router>

  );
}

export default App;
