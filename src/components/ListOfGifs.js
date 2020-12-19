import React from "react";
import Gif from "./Gif";
import Loading from './Loading'
import { useGifs } from '../hooks/useGifs'
import "./styles/LoadingPage.css";

function ListOfGifs({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prevPage => prevPage + 1);

  return <> 
    { (loading) 
      ? <Loading /> 
      : (<div className="khe">
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
      </div>)
    }
    <button className="nextPageButon" onClick={handleNextPage}>Siguiente</button>
  </>
}
export default ListOfGifs;
