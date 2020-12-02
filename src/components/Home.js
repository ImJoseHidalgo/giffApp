import React from "react";
import Gif from "./Gif";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h2>
        Encontra el GIF
        <br />
        que quieras
      </h2>
      <Gif
        title="Panda GIF"
        url="https://media0.giphy.com/media/EatwJZRUIv41G/giphy.gif?cid=9e7fb7c6p5q2xmqi728lht7oecckvsiba7u3wo4sg95ch345&rid=giphy.gif"
      />
    </div>
  );
}
export default Home;
