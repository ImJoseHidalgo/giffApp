import "./styles/Gif.css";

function Gif({ title, id, url }) {
  return (
    <div className="gif">
      <h4>{title}</h4>
      <img src={url} alt={title}></img>
    </div>
  );
}
export default Gif;
