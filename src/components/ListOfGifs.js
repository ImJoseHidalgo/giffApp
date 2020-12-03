import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";
import "./styles/LoadingPage.css";

function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="khe">
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} />
      ))}
    </div>
  );
}
export default ListOfGifs;
