import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <div className="links">
        <h1>App</h1>
        <Link to="/gif/panda">Pandas</Link>
        <Link to="/gif/code">Code</Link>
        <Link to="/gif/Stewie-Griffin">Stewie</Link>
        <Link to="/gif/Kyle-South-Park">Kyle</Link>
      </div>
      <section className="App-content">
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
