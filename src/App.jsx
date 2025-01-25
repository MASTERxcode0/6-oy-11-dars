import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Productfull from './pages/Peoduktfull';
import Card from './pages/Card';
import MainLayaute from './Layaut/MainLayaute';

export const TemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme == 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }, [theme])

  return (
    <div>
      <TemeContext.Provider value={{ theme, setTheme }}>
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
          <Route path="/productfull" element={
            <MainLayaute>
              <Productfull />
            </MainLayaute>
          } />
        </Routes>
      </TemeContext.Provider>
    </div>
  );
}

export default App;
