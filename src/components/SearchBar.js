import React, { useState } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import { webShare } from "../services/web-share";
import shareIcon from "../share.svg";
import backIcon from "../left-arrow.svg";
import "./styles/SearchBar.css";

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
  const backButton = () => {
    window.history.back();
  }

  return (
    <header >
      <section className="searchBar-container">
        <img onClick={backButton} src={backIcon} alt='share button'/>
        <Link to="/"><h5>Home</h5></Link>
        <img onClick={()=>webShare()} src={shareIcon} alt='share button'/>
      </section>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={keyword}
          placeholder="Buscar GIFs"
        />
        <button>Buscar</button>
      </form>
    </header>
  );
}
export default SearchBar;
