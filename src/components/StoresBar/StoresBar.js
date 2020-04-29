import React from "react";
import "./StoresBar.css";
import { Dropdown } from "semantic-ui-react";
import { useTheme } from "../../context/Theme";
import themes from "../../context/themes";

const typeOpt = [
  {
    key: "Água",
    text: "Água",
    value: themes.water,
  },
  {
    key: "Dragão",
    text: "Dragrão",
    value: themes.dragon,
  },
  {
    key: "Fada",
    text: "Fada",
    value: themes.fairy,
  },
  {
    key: "Fantasma",
    text: "Fantasma",
    value: themes.ghost,
  },
  {
    key: "Fogo",
    text: "Fogo",
    value: themes.fire,
  },
  {
    key: "Gelo",
    text: "Gelo",
    value: themes.ice,
  },
  {
    key: "Inseto",
    text: "Inseto",
    value: themes.bug,
  },
  {
    key: "Lutador",
    text: "Lutador",
    value: themes.fighting,
  },
  {
    key: "Metálico",
    text: "Metálico",
    value: themes.steel,
  },
  {
    key: "Normal",
    text: "Normal",
    value: themes.normal,
  },
  {
    key: "Noturno",
    text: "Noturno",
    value: themes.dark,
  },
  {
    key: "Pedra",
    text: "Pedra",
    value: themes.rock,
  },
  {
    key: "Psíquico",
    text: "Psíquico",
    value: themes.psychic,
  },
  {
    key: "Terra",
    text: "Terra",
    value: themes.ground,
  },
  {
    key: "Venenoso",
    text: "Venenoso",
    value: themes.poison,
  },
  {
    key: "Voador",
    text: "Voador",
    value: themes.flying,
  },
];

const StoresBar = ({ setSearchValue }) => {
  const { theme, setTheme } = useTheme();

  const handleDropDownChange = (e, result) => {
    e.preventDefault();
    const { value } = result || e.target;
    setTheme(value);
  };

  return (
    <>
      <div className="stores-bar">
        <div className="stores-bar__text">
          Tem interesse em outros tipos de Pokemon? Conheça nossa outras lojas!
        </div>

        <div className="dropdown-container">
          <Dropdown
            placeholder="Visite nossas outras lojas"
            fluid
            selection
            options={typeOpt}
            onChange={handleDropDownChange}
          />
        </div>
      </div>
    </>
  );
};

export default StoresBar;
