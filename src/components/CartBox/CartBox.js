import React from 'react';
import './CartBox.css';
import { Button, Icon } from 'semantic-ui-react'
import CartItem from '../CartItem/CartItem';
import { useTheme } from '../../context/Theme';
// import themes from '../../context/themes';

const CartBox = () => {

  const { theme, setTheme } = useTheme();

  return (
  <>
    <div className="cart-box-container">

    <div className='cart-box-container__resume'>
      <p style={{textAlign: 'center'}}>Resumo do pedido</p>
    </div>

    <CartItem />

    <div className='cart-box-container__total'>
      <p>TOTAL</p>
      <p>$ 100</p>
    </div>

    <div className='cart-box-container__btn'>
      <Button icon labelPosition='right' size='huge' style={{background: theme.colors.background, color: theme.colors.text}}>
        Finalizar compra
      <Icon name='payment' />
    </Button>
    </div>
      
    </div>
  </>
  );
}

export default CartBox;
