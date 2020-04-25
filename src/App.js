import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemList from './components/ItemList/ItemList';
import CartBox from './components/CartBox/CartBox';

const App = () => {
  return (
    <div className="App">
    <Navbar />
    <div style={{display: 'flex'}}>
      <ItemList />
      <CartBox />
    </div>
    </div>
  );
}

export default App;
