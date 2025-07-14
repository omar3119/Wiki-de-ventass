import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { context } from "../../context/context.jsx";
import data from "../../data/data.json"; // Import the data for the CardComplete component

import "../../styles/App.scss"; // Import the styles for the CardComplete component

const CardComplete = () => {
  const { showCardComplete, setShowCardComplete, cardId, darkMode } = useContext(context);

  const colorMap = {
    cierre: "bg__green",
    apertura: "bg__blue",
    objeciones: "bg__red",
    cualificacion: "bg__yellow",
  };

  // Funcion para manejar el cierre de la tarjeta completa
  // y ocultarla
  const handleClose = () => {
    setShowCardComplete(false);
  };

  // Si no hay un cardId seleccionado, no renderizar nada
  if (!data[cardId]) return null;

  return (
    <div className={`bg__card-complete ${showCardComplete ? "show" : ""}`}>
      <article className={`card__complete ${cardId} ${darkMode ? "dark-theme" : ""}`}>
        <div className="card__header">
          <h2 className="card__title">{data[cardId].title}</h2>
          <MdClose className={`card__close ${darkMode ? "card__close-theme" : ""}`} onClick={handleClose} />
        </div>
        <p className="card__description">{data[cardId].response}</p>
        <div>
          <button
            className={`card__button ${colorMap[data[cardId].nameFilter]}`}
          >
            {data[cardId].nameFilter}
          </button>
        </div>
      </article>
    </div>
  );
};

export default CardComplete;
