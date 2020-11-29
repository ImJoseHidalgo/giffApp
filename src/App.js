import React, { useEffect, useState } from "react";
import "./App.css";

const apiURL =
  "https://api.giphy.com/v1/gifs/search?api_key=BYKsFzfenvLYOR9gbpPxcHDFvxTZ2C7W&q=&limit=25&offset=0&rating=g&lang=en";

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    console.log("actual");
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const { data } = response;
        console.log(data);
        const gifs = data.map((images) => images.images.downsized_small.url);
        setGifs(gifs);
        console.log(gifs);
      });
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif}></img>
        ))}
      </section>
    </div>
  );
}

export default App;
