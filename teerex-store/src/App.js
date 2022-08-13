import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
