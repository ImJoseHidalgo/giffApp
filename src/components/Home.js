import React from "react";
import Gif from "./Gif";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2>
        Busca el GIF que quieras y guardalo manteniendo presionando sobre el
      </h2>
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
