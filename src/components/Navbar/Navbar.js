import React from 'react';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'semantic-ui-react';
import { useTheme } from '../../context/Theme';
import themes from '../../context/themes'


const Navbar = () => {
  
  const { theme, setTheme } = useTheme();

  return (
    <div className="nav-container" style={{background: theme.background, color: theme.color}}>
      <h2>Nome da Loja</h2>
      <SearchBar />
      <h3><Icon name='user circle outline' size='large'></Icon>Olá, Treinador</h3>
    </div>
  );
}

export default Navbar;
