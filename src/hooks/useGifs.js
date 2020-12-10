import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

export function useGifs({ keyword } = { keyword: localStorage.getItem('lastKeyword') }) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
    useEffect(function () {
    setLoading(true);
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'stewie griffin';
    getGifs({ keyword: keywordToUse })
    .then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
      });
    }, [keyword]
  );
  return { loading, gifs };
}
