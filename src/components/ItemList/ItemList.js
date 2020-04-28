import React from 'react';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ pokemon, showAllPokemons, filteredPokemons }) => {
  return (
    <div className="item-list-container">

      {
        showAllPokemons ? pokemon.map(e => (
        <ItemCard key={e.id} pokeName={e.name} pokeImg={e.sprites.front_default} pokePrice={e.base_experience}/>
      )) : filteredPokemons.map(e => (
        <ItemCard key={e.id} pokeName={e.name} pokeImg={e.sprites.front_default} pokePrice={e.base_experience}/>
      ))
      
      }
    
      
    </div>
  );
}

export default ItemList;
