import React from 'react';
import './Navbar.css';
import SearchBar from '../SearchBar/SearchBar';
import { Icon } from 'semantic-ui-react';

const Navbar = () => {
  return (
    <div className="nav-container">
      <h2>Nome da Loja</h2>
      <SearchBar />
      <h3><Icon name='user circle outline' size='large'></Icon>Olá, Treinador</h3>
    </div>
  );
}

export default Navbar;
