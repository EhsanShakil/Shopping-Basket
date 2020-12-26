import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import {  useSelector } from "react-redux";
import { State } from "./store/State";

function App() {
  // const [products, setProducts] = useState();
const products = useSelector((state: State[]) => state)

console.log(products);

  return (
    <div className="App">
      <Header title="Shopping Basket" />
      <Products />
    </div>
  );
}

export default App;
