
import Nav from "./components/Nav";
import React, {useEffect, useState} from "react";
import { books } from "./data";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart"
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart);
  }, [cart])

  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Books" exact render={() => <Books books={books} />} />
      <Route path="/Books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} />
      <Route path="/cart" exact render={() => <Cart books={books} />} />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
