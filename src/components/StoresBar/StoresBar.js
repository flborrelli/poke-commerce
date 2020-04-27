import React from 'react';
import './StoresBar.css';
import { Button, Icon } from 'semantic-ui-react';
import { themes, useTheme } from '../../context/Theme';
// import themes from '../../context/themes';



const StoresBar = () => {
  const { theme, setTheme } = useTheme();

  return (
  <>
    <div className="stores-bar">

      <Button onClick={() => setTheme(theme === themes.water ? themes.water : themes.water)}>Água</Button>

      <Button onClick={() => setTheme(theme === themes.water ? themes.fire : themes.fire)}>Fogo</Button>

      <Button>Gelo</Button>

    </div>
  </>
  );
}

export default StoresBar;
