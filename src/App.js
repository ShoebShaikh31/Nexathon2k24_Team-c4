import "./App.css";
import FlatDetail from "./components/FlatDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FlatList from "./components/FlatList";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/" component={FlatList} />
        <Route path="/flat/:slug" component={FlatDetail} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
