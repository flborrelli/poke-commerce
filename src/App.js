import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CartBox from "./components/CartBox/CartBox";
import StoresBar from "./components/StoresBar/StoresBar";
import ThemeProvider from "./context/Theme";
import api from './util/api';
import pokeTypes from './util/pokeTypes';
import axios from 'axios';


const App = () => {

  const [pokemonArr, setPokemonArr] = useState([]);

  const getAllPokemons = async () => {
    try{
      const response = await api.get('/')
      setPokemonArr(response.data.pokemon)
    }catch(err){
      console.log('Error while getting pokemons', err)
    }

  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  console.log(pokemonArr)

  return (
    <ThemeProvider>
      <StoresBar />
      <Navbar />
      <div style={{ display: "flex" }}>
        <ItemList pokemon={pokemonArr}/>
        <CartBox />
      </div>
    </ThemeProvider>
  );
};

export default App;
