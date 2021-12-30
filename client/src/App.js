import React from 'react';

import './App.css';

import Navbar from './Components/Navbar.js';

import PokemonList from './Components/PokemonList.js';

import AddNewPokemon from './Components/AddNewPokemon.js';

import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import DeletePokemon from './Components/DeletePokemon.js';
import FilterPokemon from './Components/FilterPokemon.js';
import EditPokemon from './Components/EditPokemon.js';



function App() {
  return (
    
<Router>
    <div className="App">
    
     <Navbar/>
     <Routes>
     <Route path='/AddNewPokemons' element={<AddNewPokemon/>}/>
     <Route path='/Viewpokemons' element={<PokemonList/>}/>
     <Route path='/DeletePokemon' element={<DeletePokemon/>}/>
     <Route path='/FilterPokemon' element={<FilterPokemon/>}/>
     <Route path='/EditPokemon' element={<EditPokemon/>}/>
   
    </Routes>
     
     

   
   
</div>  
</Router>

  );
}

export default App;
