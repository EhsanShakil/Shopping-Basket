import React from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header title="Shopping Basket" />
      <Products/>
    </div>
  );
}

export default App;
