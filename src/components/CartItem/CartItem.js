import React from 'react';
import './CartItem.css';
import pokeImg from '../../assets/pikachu.png';
import { Button, Icon } from 'semantic-ui-react'

const CartItem = () => {
  return (
  <>
    <div className="cart-item-container">
      <Button circular icon='close' style={{color: 'tomato'}} />
      <img src={pokeImg} alt=""/>
      <p>$ 100,00</p>
    </div>
  </>
  );
}

export default CartItem;
