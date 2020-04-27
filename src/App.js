import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CartBox from "./components/CartBox/CartBox";
import StoresBar from "./components/StoresBar/StoresBar";
import ThemeProvider from "./context/Theme";
import { pokeApi } from './util/api';
import pokeTypes from './util/pokeTypes';
import { useTheme } from './context/Theme';
// import axios from 'axios';


const App = () => {

  const [pokemonData, setPokemonData] = useState([])
  const { theme, setTheme } = useTheme();

  const fetchAllPokemonsFromType = async ({ id }) => {
    const response = await pokeApi.getAllPokemonsFromType(
      id,
      pokeTypes,
      fetch
    );
    setPokemonData(response);
  };

  useEffect(() => {
    fetchAllPokemonsFromType(theme);
  }, [theme]);

  console.log(theme, pokemonData)

  return (
    <>
      <StoresBar />
      <Navbar />
      <div style={{ display: "flex" }}>
        <ItemList pokemon={pokemonData}/>
        <CartBox />
      </div>
    </>
  );
};

export default App;
