import React from 'react';
import './ItemCard.css';
import { Button, Icon } from 'semantic-ui-react';


const ItemCard = ({ pokeName, pokeImg, pokePrice }) => {
  return (
  <>
    <div className="card-container">
      
      <div>
        <img src={pokeImg} alt="pokemon"/>
      </div>

      <div className='card-container__text'>
        <p style={{ fontWeight:'bold'}}>{pokeName}</p>
        <p>${pokePrice}</p>
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
