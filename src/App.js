// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import this

import Nav1 from './components/navigation/Nav1';
import Nav2 from './components/navigation-2/Nav2';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Contact from './components/main/Contact'; 
import About from './components/main/About';
import Signin from './components/main/Signin';
import ProductDetail from './components/main/ProductDetail';
import CartPage from './components/main/CartPage'; 
import OrderCheckout from './components/main/OrderCheckout';

import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <CartProvider> {/* WRAP EVERYTHING HERE */}
      <BrowserRouter>
        <Nav1 onSearch={setSearchTerm} />
        <Nav2 />
        <Routes>
          <Route path="/" element={<Main searchTerm={searchTerm} onSearch={setSearchTerm} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/checkout" element={<OrderCheckout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;