import React from 'react';
import './SearchBar.css';
import { Input } from 'semantic-ui-react'

const SearchBar = ({ handleInputChange }) => {
  return (
    <>
      <Input icon='search' placeholder='Qual pokemon procura?' onChange={handleInputChange} size='huge' style={{width: '60vw'}}/>
    </>
  );
}

export default SearchBar;
