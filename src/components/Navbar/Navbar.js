import React from 'react';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'semantic-ui-react';
import { useTheme } from '../../context/Theme';


const Navbar = ({ handleInputChange }) => {
  
  const { theme } = useTheme();

  return (
    <div className="nav-container" style={{background: theme.background, color: theme.color}}>
      <h2>Loja {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}</h2>
      <SearchBar handleInputChange={handleInputChange} />
      <h3><Icon name='user circle outline' size='large'></Icon>Olá, Treinador</h3>
    </div>
  );
}

export default Navbar;
