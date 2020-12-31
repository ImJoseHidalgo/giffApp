import React from "react";
import { Link, useLocation } from "wouter";
import "./styles/Gif.css";

function Gif({ id, title, url, keyword }) {
  const location = useLocation();
  return (
    (location[0] !== '/' && location[0] !== `/search/${keyword}`) 
      ? <div className="single-gif">
          <h2 className='single-gif-title'>{title}</h2>
          <img loading='lazy' src={url} alt={title} />
          <h3>Recorda que puedes guardar este GIF manteniendo presionando sobre el</h3>
        </div>
      : <div className="gif">
          <Link to={`/gif/${id}`} >
            <img loading='lazy' src={url} alt={title} />
          </Link>
        </div>
  );
}
export default Gif;
