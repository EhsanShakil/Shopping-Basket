import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header title="Shopping Basket" />
      <Products />
    </>
  );
}

export default App;
