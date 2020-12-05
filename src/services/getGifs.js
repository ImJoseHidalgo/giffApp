const apiKey = "BYKsFzfenvLYOR9gbpPxcHDFvxTZ2C7W";

function getGifts({ keyword = "" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=6&offset=0&rating=g&lang=es`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = image.images.fixed_height_downsampled;
        return { title, id, url };
      });
      return gifs;
    });
}
export default getGifts;
