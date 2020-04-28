import React from 'react';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';
import { useTheme } from '../../context/Theme';


const ItemList = ({ pokemon, showAllPokemons, filteredPokemons }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='item-container'>
        <h2>Conheça todos os pokemons da loja {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}</h2>
    <div className="item-list-container">
      {
        showAllPokemons ? pokemon.map(e => (
        <ItemCard key={e.id} pokeName={e.name} pokeImg={e.sprites.front_default} pokePrice={e.base_experience}/>
      )) : filteredPokemons.map(e => (
        <ItemCard key={e.id} pokeName={e.name} pokeImg={e.sprites.front_default} pokePrice={e.base_experience}/>
      ))
      
      }
    
      
    </div>
    </div>
  );
}

export default ItemList;
