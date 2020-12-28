import React from "react";
import "./App.css";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> <Header title="Shopping Basket" /><Products/></div>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
