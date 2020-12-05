import React, { useState } from "react";
import Modal from "react-modal";
import "./styles/Gif.css";

Modal.setAppElement("#root");
function Gif({ title, url }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="gif">
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#ebebeb",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
        className={"Modal"}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Copia la url haciendo click en el boton de abajo</h2>
        <a href={url} target="_blank" rel="noreferrer">
          COPIAR
        </a>
        <button onClick={() => setModalIsOpen(false)}>X</button>
      </Modal>
      <img onClick={() => setModalIsOpen(true)} src={url} alt={title} />
    </div>
  );
}
export default Gif;
