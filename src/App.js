import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Route } from "wouter";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import StaticContext from './components/context/StaticContext';
import Detail from "./components/pages/Details";
import { GifsContextProvider } from "./components/context/GifsContext";

function App() {
  return (
    <StaticContext.Provider value={{name: 'Web App De Prueba Pa', seguimeEnGitHub: true}}>
      <div className="App">
        <SearchBar />
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <section className="App-content">
              <Route path="/search/:keyword" component={ListOfGifs} />
            </section>
            <Route exact path="/gif/:id" component={Detail} />
          </GifsContextProvider>
      </div>
    </StaticContext.Provider>
  )
}

export default App;
