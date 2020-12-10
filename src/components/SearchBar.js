import React, { useState } from "react";
import { Link, Route } from "wouter";
import "./styles/SearchBar.css";
import { useLocation } from "wouter";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    if (keyword !== "") {
      e.preventDefault();
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
      <Link to="/">
        <h5>Home</h5>
      </Link>
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
