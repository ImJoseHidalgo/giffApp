import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Route path="/" component={Home} />
      <section className="App-content">
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
