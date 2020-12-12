import React from "react";
import { Link } from "wouter";
import "./styles/Gif.css";

function Gif({ id, title, url }) {
  return (
    <div className="gif">
      <Link to={`/gif/${id}`} >
        <img loading='lazy' src={url} alt={title} />
      </Link>
    </div>
  );
}
export default Gif;
