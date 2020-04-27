import React from 'react';
import './StoresBar.css';
import { Button, Icon } from 'semantic-ui-react';
import Container from '../Container/Container';
import { themes, useTheme } from '../../context/Theme';



const StoresBar = () => {
  const { theme, setTheme } = useTheme();

  return (
  <>
    <div className="stores-bar">

      <Button onClick={() => setTheme(theme === themes.main ? themes.water : themes.main)}>Água</Button>

      <Button>Fogo</Button>

      <Button>Gelo</Button>

    </div>
  </>
  );
}

export default StoresBar;
