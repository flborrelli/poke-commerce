import React from 'react';
import './ItemCard.css';
import { Button, Icon } from 'semantic-ui-react';
import pokeballImg from '../../assets/pokeball.png';


const ItemCard = ({ pokeName, pokeImg, pokePrice, handleAddToCart }) => {
  return (
  <>
    <div className="card-container">
      
      <div>
        <img src={pokeImg === null ? pokeballImg : pokeImg} alt={pokeName}/>
      </div>

      <div className='card-container__text'>
        <p style={{ fontWeight:'bold'}}>{pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}</p>
        <p style={{color: 'black'}}>${pokePrice},00</p>
      </div>

      <div>
      <Button icon labelPosition='right' color='green' size='huge'>
      Adicionar
      <Icon name='add to cart' />
    </Button>
      </div>


    </div>
  </>
  );
}

export default ItemCard;
