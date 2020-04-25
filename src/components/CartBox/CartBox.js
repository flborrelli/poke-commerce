import React from 'react';
import './CartBox.css';
import { Button, Icon } from 'semantic-ui-react'

const CartBox = () => {
  return (
  <>
    <div className="cart-box-container">

    <div>
      <p>Resumo do pedido</p>
    </div>

    <div>
      <Button icon labelPosition='right' color='green'>
        Finalizar compra
      <Icon name='thumbs up outline' />
    </Button>
    </div>
      
    </div>
  </>
  );
}

export default CartBox;
