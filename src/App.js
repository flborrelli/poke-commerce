import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CartBox from "./components/CartBox/CartBox";
import StoresBar from "./components/StoresBar/StoresBar";
import { pokeApi } from './util/api';
import pokeTypes from './util/pokeTypes';
import { useTheme } from './context/Theme';


const App = () => {

  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [showAllPokemons, setShowAllPokemons] = useState(true);

  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    fetchAllPokemonsFromType(theme);
  }, [theme]);

  useEffect(() => {
    filterPokemons();
  }, [searchValue]);

  const fetchAllPokemonsFromType = async ({ id }) => {
    const response = await pokeApi.getAllPokemonsFromType(
      id,
      pokeTypes,
      fetch
    );
    setPokemonData(response);
  };


  const handleSearchInputChange = e => {
    e.preventDefault();
    if (e !== "") {
      setShowAllPokemons(false);
      setSearchValue(e.target.value);
      filterPokemons();
    } else {
      setShowAllPokemons(true);
    }
  };

  const filterPokemons = () => {
    const pokemonDataCopy = [...pokemonData];
    const re = new RegExp(searchValue, "gi");
    const reVowels = new RegExp(/[aeiou]/, "gi");
    const filteredArray = pokemonDataCopy.filter(pokemon => {
      if (
        pokemon.name.match(re) ||
        pokemon.name.replace(reVowels, "").match(re)
      ) {
        return pokemon;
      }
      return null;
    });
    setFilteredPokemons(filteredArray);
  };


  console.log(searchValue)
  console.log(filteredPokemons)


  return (
    <>
      <StoresBar />
      <Navbar handleInputChange={handleSearchInputChange}/>
      <div style={{ display: "flex" }}>
        <ItemList pokemon={pokemonData} filteredPokemons={filteredPokemons} showAllPokemons={showAllPokemons}/>
        <CartBox />
      </div>
    </>
  );
};

export default App;
