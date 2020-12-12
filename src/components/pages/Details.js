import React, { useContext } from 'react';
import GifsContext from '../../components/context/GifsContext';
import Gif from '../Gif';

function Detail ({ params }) {
  const {gifs} = useContext(GifsContext);
  // console.log(gifs);
  const gif = gifs.find(singleGif => singleGif.id === params.id);
  console.log(gif);

  return (
    <section>
      <Gif {...gif}/>
    </section>
  )
}

export default Detail;