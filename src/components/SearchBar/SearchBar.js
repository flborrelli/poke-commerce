import React from 'react';
import './SearchBar.css';
import { Input } from 'semantic-ui-react'

const SearchBar = () => {
  return (
    <>
      <Input icon='search' placeholder='Search...' size='huge' style={{width: '60vw'}}/>
    </>
  );
}

export default SearchBar;
