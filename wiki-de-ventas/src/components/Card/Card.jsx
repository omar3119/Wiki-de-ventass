
import React from "react";
import { useContext } from "react";
import { context } from "../../context/context";

import "../../styles/Wiki.scss"; // Import the styles for the Wiki page

// Card --> Wiki 
const Card = ({ title, description, nameFilter, id }) => {
  const colorMap = {
    cierre: "bg__green",
    apertura: "bg__blue",
    objeciones: "bg__red",
    cualificacion: "bg__yellow",
  };

  const { setShowCardComplete,setCardId } = useContext(context);

  // Function to handle showing the complete card view
  const handleCardClick = (e) => {
    let index =e.target.closest(".card").id;
    setCardId(--index);
    setShowCardComplete(true);
  };

  return (

    <div className="card" onClick={handleCardClick} id={id}>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>

      <div className="card__footer">
        <button
          className={`card__button ${colorMap[nameFilter] || "bg__default"}`}
        >
          {nameFilter}
        </button>
      </div>
    </div>
  );
};

export default Card;
