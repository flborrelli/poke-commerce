import React from "react";
import "./CartBox.css";
import { Button, Icon, Header, Image, Modal } from "semantic-ui-react";
import CartItem from "../CartItem/CartItem";
import pokeballImg from "../../assets/pokeball.png";
import { useTheme } from "../../context/Theme";

const CartBox = ({ pokemonsOnCart = [], handleClick, resetAppState }) => {
  const { theme, setTheme } = useTheme();

  const totalPrice = pokemonsOnCart.reduce(
    (acc, { base_experience: price }) => {
      if (typeof price !== "number") throw new Error("Preço não é número!");
      return acc + price;
    },
    0
  );

  const totalItemsOnCart = pokemonsOnCart.length;

  return (
    <>
      <div
        className="cart-box-container"
        style={{ background: theme.background, color: theme.color }}
      >
        <div className="cart-box-container__resume">
          <p style={{ textAlign: "center" }}>Resumo do pedido</p>
        </div>
        <div className="cart-box__poke__number">
          <p>Pokemon no carrinho: {totalItemsOnCart}</p>
        </div>
        <hr />
        {pokemonsOnCart.length < 1 ? (
          <div className="zero-poke">
            Nenhum pokemon adicionado até o momento.
          </div>
        ) : (
          pokemonsOnCart.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <CartItem {...pokemon} handleClick={handleClick} />
              </div>
            );
          })
        )
        }
        {
          pokemonsOnCart.length < 1 ? <></> : <> <hr/>
        <div className="cart-box-container__total">
          <p>Total</p>
          <p>$ {totalPrice}</p>
          
        </div>
          <hr/>
        <div className="cart-box-container__btn">

        <Modal onClose={resetAppState} trigger={<Button
            icon
            labelPosition="right"
            size="huge"
            style={{ background: "#ed564b", color: "white" }}
          >
            Finalizar compra
            <Icon name="payment" />
          </Button>}>
    <Modal.Header>Obrigado!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={pokeballImg} />
      <Modal.Description>
        <Header>Seu pedido será processado e enviado em breve.</Header>
        <p style={{fontSize: '1.5rem'}}>Você ganhou de volta ${totalPrice/20}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
        </div>
        </>
        }
      </div>
    </>
  );
};

export default CartBox;
