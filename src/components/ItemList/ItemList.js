import React from 'react';
import './ItemList.css';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = () => {
  return (
    <div className="item-list-container">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />

    </div>
  );
}

export default ItemList;
