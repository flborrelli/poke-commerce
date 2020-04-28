import React from 'react';
import './StoresBar.css';
import { Button, Icon } from 'semantic-ui-react';
import { useTheme } from '../../context/Theme';
import themes from '../../context/themes';



const StoresBar = () => {
  const { theme, setTheme } = useTheme();

  return (
  <>
    <div className="stores-bar">

      <Button onClick={() => setTheme(themes.water)}>Água</Button>
      <Button onClick={() => setTheme(themes.dragon)}>Dragão</Button>
      <Button onClick={() => setTheme(themes.fairy)}>Fada</Button>
      <Button onClick={() => setTheme(themes.ghost)}>Fantasma</Button>
      <Button onClick={() => setTheme(themes.fire)}>Fogo</Button>
      <Button onClick={() => setTheme(themes.ice)}>Gelo</Button>
      <Button onClick={() => setTheme(themes.bug)}>Inseto</Button>
      <Button onClick={() => setTheme(themes.fighting)}>Lutador</Button>
      <Button onClick={() => setTheme(themes.steel)}>Metálico</Button>
      <Button onClick={() => setTheme(themes.normal)}>Normal</Button>
      <Button onClick={() => setTheme(themes.dark)}>Noturno</Button>
      <Button onClick={() => setTheme(themes.rock)}>Pedra</Button>
      <Button onClick={() => setTheme(themes.psychic)}>Psíquico</Button>
      <Button onClick={() => setTheme(themes.ground)}>Terra</Button>
      <Button onClick={() => setTheme(themes.poison)}>Venenoso</Button>
      <Button onClick={() => setTheme(themes.flying)}>Voador</Button>




    </div>
  </>
  );
}

export default StoresBar;
