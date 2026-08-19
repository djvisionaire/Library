
import Nav from "./components/Nav";
import React, {useEffect, useState} from "react";
import { books } from "./data";
import footer from "./components/footer.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart"
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id ? {...item, quantity: +quantity} : item))
  }

  function numberofItemsInCart() {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.quantity;
    });
    return counter;
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
    console.log('remove item',item);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
<Router>
    <div className="App">
      <Nav numberofItemsInCart={numberofItemsInCart()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books books={books} />} />
        <Route path="/Books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
        <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
      </Routes>
      <footer />
    </div>
    </Router>

  );
}

export default App;
