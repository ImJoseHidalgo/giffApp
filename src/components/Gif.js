import "./styles/Gif.css";

function Gif({ title, url }) {
  return (
    <div className="gif">
      <img src={url} alt={title}></img>
    </div>
  );
}
export default Gif;
