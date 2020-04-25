import React from 'react';
import './ItemCard.css';
import pokeImg from '../../assets/pikachu.png';
import { Button, Icon } from 'semantic-ui-react'

const ItemCard = () => {
  return (
  <>
    <div className="card-container">
      
      <div>
        <img src={pokeImg} alt="pokemon"/>
      </div>

      <div className='card-container__text'>
        <p style={{ fontWeight:'bold'}}>Pikachu</p>
        <p>$ 100,00</p>
      </div>

      <div>
      <Button icon labelPosition='right' color='green'>
      Adicionar
      <Icon name='add to cart' />
    </Button>
      </div>


    </div>
  </>
  );
}

export default ItemCard;
