import React from "react";
import { useState } from "react";
import "../../styles/Search.scss";
const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setSearchTerm(value);
    onSearch(value); // Actualizar el estado con el valor del input
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Buscar tarjeta..."
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
