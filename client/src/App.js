import React from 'react';

import './App.css';

import Navbar from './Components/Navbar.js';

import PokemonList from './Components/PokemonList.js';

import AddNewPokemon2 from './Components/AddNewPokemon2.js';

import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import DeletePokemon from './Components/DeletePokemon.js';
import FilterPokemon from './Components/FilterPokemon.js';
import EditPokemon from './Components/EditPokemon.js';



function App() {
  return (
    <div>
    <AddNewPokemon2/>
{/* <Router>
    <div className="App">
    
     <Navbar/>
     <Routes>
     <Route path='/AddNewPokemons' element={<AddNewPokemon2/>}/>
     <Route path='/Viewpokemons' element={<PokemonList/>}/>
     <Route path='/DeletePokemon' element={<DeletePokemon/>}/>
     <Route path='/FilterPokemon' element={<FilterPokemon/>}/>
     <Route path='/EditPokemon' element={<EditPokemon/>}/>
   
    </Routes>
     
     

   
   
</div>  
</Router> */}
</div>

  );
}

export default App;
