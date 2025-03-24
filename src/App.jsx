import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Blogs from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
