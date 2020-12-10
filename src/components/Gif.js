import React from "react";
import "./styles/Gif.css";

function Gif({ title, url }) {
  return (
    <div className="gif">
      <img loading='lazy' src={url} alt={title} />
    </div>
  );
}
export default Gif;
