import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Card from './pages/Card';
import MainLayaute from './Layaut/MainLayaute';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayaute>
              <Home />
            </MainLayaute>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayaute>
              <About />
            </MainLayaute>
          }
        />
        <Route
          path="/product"
          element={
            <MainLayaute>
              <Product />
            </MainLayaute>
          }
        />
        <Route
          path="/card"
          element={
            <MainLayaute>
              <Card />
            </MainLayaute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
