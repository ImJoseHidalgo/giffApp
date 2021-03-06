import React from "react";
import Gif from "./Gif";
import Loading from './Loading';
import { useGifs } from '../hooks/useGifs';
import "./styles/Home.css";

function Home() {
  const { loading, gifs } = useGifs();

  return (
    <div className="home">
      <h3>Busca el GIF que quieras y guardalo manteniendo presionando sobre el</h3>
      <img className="gif-home-landing" src="https://media.giphy.com/media/l0HlSFMhjVbgyA32U/giphy.gif" alt="gif por defecto"/>
      <h2>Ultima Busqueda: {localStorage.getItem('lastKeyword') !== 'null' ? decodeURI(localStorage.getItem('lastKeyword')) : 'No hay busquedas'}</h2>
      {(loading) 
        ? <Loading /> 
        : (<div className="khe-home">
           {gifs.map(({ id, title, url }) => (
             <Gif key={id} id={id} title={title} url={url} />
           ))}
          </div>)}
    </div>
  );
}
export default Home;
