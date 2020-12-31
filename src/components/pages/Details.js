import React, { useContext } from 'react';
import GifsContext from '../../components/context/GifsContext';
import Gif from '../Gif';

function Detail ({ params }) {
  const {gifs} = useContext(GifsContext);
  const gif = gifs.find(singleGif => singleGif.id === params.id);

  return (
    <section>
      <Gif {...gif}/>
    </section>
  )
}

export default Detail;