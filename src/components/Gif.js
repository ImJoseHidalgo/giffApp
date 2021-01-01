import React from "react";
import { Link, useLocation } from "wouter";
import { webShare } from "../services/web-share";
import "./styles/Gif.css";

function Gif({ id, title, url, keyword }) {
  const location = useLocation();
  return (
    (location[0] !== '/' && location[0] !== `/search/${keyword}`) 
      ? <div className="single-gif">
          <h2 className='single-gif-title'>{title}</h2>
          <img loading='lazy' src={url} alt={title} />
          <h3>Recorda que puedes <b>guardar este GIF</b> manteniendo presionando sobre el</h3>
          <h4>o</h4>
          <h3>también puedes compartir la url del gif haciendo click en el boton de abajo</h3>
          <button onClick={()=>webShare(url)}>Compartir este Gif</button>
        </div>
      : <div className="gif">
          <Link to={`/gif/${id}`} >
            <img loading='lazy' src={url} alt={title} />
          </Link>
        </div>
  );
}
export default Gif;
