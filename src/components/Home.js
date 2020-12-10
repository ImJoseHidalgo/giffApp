import React, { useState } from "react";
import Gif from "./Gif";
import Loading from './Loading';
import { useGifs } from '../hooks/useGifs';
import "./styles/Home.css";

function Home() {
  // const [keyword, setKeyword] = useState('')
  const { loading, gifs } = useGifs()

  return (
    <div className="home">
      <h3>Busca el GIF que quieras y guardalo manteniendo presionando sobre el</h3>
      <h2>Ultima Busqueda:</h2>
      {(loading) 
        ? <Loading /> 
        : (<div className="khe-home">
           {gifs.map(({ id, title, url }) => (
             <Gif key={id} id={id} title={title} url={url} />
           ))}
        </div>)}
      <Gif
        title="Probalo haciendo click en el GIF de arriba!"
        url="https://media.giphy.com/media/l0HlSFMhjVbgyA32U/giphy.gif"
      />
      <h3>Proba haciendo click en el GIF de arriba!</h3>
      <button>Compartir</button>
    </div>
  );
}
export default Home;
