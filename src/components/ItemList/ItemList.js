import React from 'react';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ pokemon }) => {
  return (
    <div className="item-list-container">
      {/* {pokemon.map(e => (
        <ItemCard pokeName={e.pokemon.name}/>
      ))} */}
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default ItemList;
