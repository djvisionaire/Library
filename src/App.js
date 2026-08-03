
import Nav from "./components/Nav";
import { books } from "./data";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home} />
      <Route path="/Books" exact render={() => <Books books={books} />} />
      <Route path="/Books/:id" render={() => <BookInfo books={books} />} />
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
