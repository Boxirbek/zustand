// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/productList/ProductList';
import SingleProduct from './components/single-product/SingleProduct';
import Swipper from "./components/swipper/Swipper"
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <Router>
      <div className={`App ${scrolled ? 'scrolled' : ''}`}>
        <Navbar />
        <Swipper/>
        <main>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
