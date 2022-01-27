import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PokemonDetail from './components/details/Details';
import NewPokemon from './components/addPokemon/addPokemon';
import LandingPage from './components/landingPage/landingPage';

function App() {
  return (
    <React.Fragment>
    <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/pokemons/:id' element={<PokemonDetail/>}/>
      <Route exact path='/addPokemon' element={<NewPokemon/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;

