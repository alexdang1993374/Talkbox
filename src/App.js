import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Spongebob from "./components/Spongebob/Spongebob.jsx";
import Simpsons from "./components/Simpsons/Simpsons.jsx"
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
    <h1>Welcome to Nostalgia Board! Choose a soundboard!</h1>
    <BrowserRouter>
      <div className="navbarDiv">
        <Navbar />
      </div>
      <div>
        <Switch>
          <Route path="/Spongebob" render={() => <Spongebob />} />
          <Route path="/Simpsons" render={() => <Simpsons />} />
        </Switch>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
