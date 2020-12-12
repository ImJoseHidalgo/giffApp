import { useContext, useState, useEffect } from 'react';
import getGifs from '../services/getGifs';
import GifsContext from '../components/context/GifsContext';

export function useGifs({ keyword } = { keyword: localStorage.getItem('lastKeyword') }) {
    const [loading, setLoading] = useState(false);
    // const [gifs, setGifs] = useState([]);
    const {gifs, setGifs} = useContext(GifsContext);
    
    useEffect(function () {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'stewie griffin';
    getGifs({ keyword: keywordToUse })
    .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
    }, [keyword, setGifs]
  );
  return { loading, gifs };
}
