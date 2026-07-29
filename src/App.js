
import Nav from "./components/Nav";
import { books } from "./data";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Books from "./pages/Books";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" extact component={Home} />
      <Route path="/books" render={() => <Books books={Books} />} />
      <home />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
