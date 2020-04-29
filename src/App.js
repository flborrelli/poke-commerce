import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CartBox from "./components/CartBox/CartBox";
import StoresBar from "./components/StoresBar/StoresBar";
import Footer from "./components/Footer/Footer";
import { pokeApi } from "./util/api";
import pokeTypes from "./util/pokeTypes";
import { useTheme } from "./context/Theme";
import PageLoader from "./components/PageLoader/PageLoader";
import {
  togglePokemonIsOnCartFlag,
  updatePokemonOnCatalogArr,
  addToCart,
  removeFromCart,
} from "./util/cartStateHelper.js";

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonsOnCart, setOnCart] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [showAllPokemons, setShowAllPokemons] = useState(true);
  const [loading, setLoading] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    fetchAllPokemonsFromType(theme);
  }, [theme]);

  useEffect(() => {
    filterPokemons();
  }, [searchValue]);

  const fetchAllPokemonsFromType = async ({ id }) => {
    setLoading(true);
    setFilteredPokemons([]);
    setShowAllPokemons(true);
    setOnCart([]);
    const response = await pokeApi.getAllPokemonsFromType(id, pokeTypes, fetch);
    setLoading(false);
    setPokemonData(response);
  };

  const handleSearchInputChange = (e) => {
    e.preventDefault();
    if (e !== "") {
      setShowAllPokemons(false);
      setSearchValue(e.target.value);
      filterPokemons();
    } else {
      setShowAllPokemons(true);
    }
  };

  const resetAppState = () => {
    fetchAllPokemonsFromType(theme);
  };

  const filterPokemons = () => {
    const pokemonDataCopy = [...pokemonData];
    const re = new RegExp(searchValue, "gi");
    const reVowels = new RegExp(/[aeiou]/, "gi");
    const filteredArray = pokemonDataCopy.filter((pokemon) => {
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

  const handleAddToCart = (idFromEvent) => {
    const foundPokemonIndex = pokemonData.findIndex(
      ({ id: pokemonId, ...pokemon }) => {
        if (pokemon.hasOwnProperty("isOnCart") && pokemon.isOnCart)
          return false;
        return pokemonId === idFromEvent;
      }
    );
    if (foundPokemonIndex === -1) return;
    const foundFlaggedPokemon = togglePokemonIsOnCartFlag(
      pokemonData[foundPokemonIndex]
    );
    addToCart(foundFlaggedPokemon, pokemonsOnCart, setOnCart);
    updatePokemonOnCatalogArr(
      foundPokemonIndex,
      foundFlaggedPokemon,
      pokemonData,
      setPokemonData
    );
  };

  const handleRemoveFromCart = (idFromEvent) => {
    const foundPokemonOnCartIndex = pokemonsOnCart.findIndex(
      ({ id: pokemonId }) => pokemonId === idFromEvent
    );
    const foundPokemonOnCatalogIndex = pokemonData.findIndex(
      ({ id: pokemonId }) => pokemonId === idFromEvent
    );
    const foundFlaggedPokemon = togglePokemonIsOnCartFlag(
      pokemonData[foundPokemonOnCatalogIndex]
    );
    removeFromCart(foundPokemonOnCartIndex, pokemonsOnCart, setOnCart);
    updatePokemonOnCatalogArr(
      foundPokemonOnCatalogIndex,
      foundFlaggedPokemon,
      pokemonData,
      setPokemonData
    );
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {" "}
          <StoresBar />
          <Navbar handleInputChange={handleSearchInputChange} />
          <div className="main-container">
            <ItemList
              pokemon={pokemonData}
              filteredPokemons={filteredPokemons}
              showAllPokemons={showAllPokemons}
              handleClick={handleAddToCart}
            />
            <CartBox
              pokemonsOnCart={pokemonsOnCart}
              handleClick={handleRemoveFromCart}
              resetAppState={resetAppState}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
