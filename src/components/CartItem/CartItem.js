import React from 'react';
import './CartItem.css';
import pokeballImg from '../../assets/pokeball.png';
import { Button, Icon } from 'semantic-ui-react'

const CartItem = ({
  id,
  handleClick,
  sprites: {front_default: sprite},
  base_experience: price,
  name,
}) => {
  return (
  <>
    <div className="cart-item-container">
      <Button className='delete-btn' circular icon='close' style={{color: 'tomato'}} onClick={() => handleClick(id)} />
      <img src={sprite === null ? {pokeballImg} : sprite} alt={name}/>
      <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      <p>${price}</p>
    </div>
  </>
  );
}

export default CartItem;
