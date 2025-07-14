import React, { useState, useEffect } from "react";
import Search from "../components/Search/Search";
import Card from "../components/Card/Card";
import data from "../data/data.json"; // Assuming you have some data to display

const PageWiki = () => {


  //FILTER CARDS
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCards, setFilteredCards] = useState(data);

  useEffect(() => {
    const texto = searchTerm.toLowerCase();

    const resultados = data.filter(
      (card) =>
        (card.title?.toLowerCase() || "").includes(texto) ||
        (card.description?.toLowerCase() || "").includes(texto) ||
        (card.nameFilter?.toLowerCase() || "").includes(texto)
    );

    setFilteredCards(resultados);
  }, [searchTerm]);
  return (
    <div className="page-wiki">
      <Search onSearch={setSearchTerm} />
      <section className="cards">

        {filteredCards.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.response}
            nameFilter={item.nameFilter}
            id={item.id}
          />
        ))}
        {filteredCards.length === 0 && (
          <div className="no-results">
            <p>No se encontraron resultados para "{searchTerm}"</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PageWiki;
