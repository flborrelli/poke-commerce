import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemList from "./components/ItemList/ItemList";
import CartBox from "./components/CartBox/CartBox";
import StoresBar from "./components/StoresBar/StoresBar";
import Container from './components/Container/Container';
import ThemeProvider from "./context/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <Container>
      <StoresBar />
      <Navbar />
      <div style={{ display: "flex" }}>
        <ItemList />
        <CartBox />
      </div>
      </Container>
    </ThemeProvider>
  );
};

export default App;
