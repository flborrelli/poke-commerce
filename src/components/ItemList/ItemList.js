import React from "react";
import "./ItemList.css";
import ItemCard from "../ItemCard/ItemCard";
import { useTheme } from "../../context/Theme";

const ItemList = ({
  pokemon,
  showAllPokemons,
  filteredPokemons,
  handleClick,
}) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="item-container">
      <h2>
        Conheça todos os pokemons do tipo{" "}
        {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
      </h2>
      <div className="item-list-container">
        {showAllPokemons ? (
          pokemon.map((e) => (
            <ItemCard
              key={e.id}
              pokeName={e.name}
              pokeImg={e.sprites.front_default}
              pokePrice={e.base_experience}
              pokeId={e.id}
              handleClick={handleClick}
            />
          ))
        ) : filteredPokemons.length < 1 ? (
          <div className='not-found'><p>Nenhum Pokemon encontrado.</p></div>
        ) : (
          filteredPokemons.map((e) => (
            <ItemCard
              key={e.id}
              pokeName={e.name}
              pokeImg={e.sprites.front_default}
              pokePrice={e.base_experience}
              pokeId={e.id}
              handleClick={handleClick}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
