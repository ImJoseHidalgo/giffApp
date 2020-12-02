import React, { useState } from "react";
import "./styles/SearchBar.css";
import { useLocation } from "wouter";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    if (keyword !== "") {
      e.preventDefault();
      //navegar a otra ruta
      pushLocation(`/search/${keyword}`);
      setKeyword("");
    }
    e.preventDefault();
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="searchBar-container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Buscar GIFs"
        />
        <button>Buscar</button>
      </form>
    </section>
  );
}
export default SearchBar;
