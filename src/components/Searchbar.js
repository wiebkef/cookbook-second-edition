import React from "react";
import "../css/Searchbar.css";

const Searchbar = ({ handleSearch, setSearch }) => {
  return (
    <div className="background1 pb-4">
      <h3 className="lora-font">Search for Recipes</h3>
      <form onSubmit={handleSearch} className="mx-auto custom-search">
        <input
          className="custom-search-input text-small"
          type="text"
          placeholder="Ingredients, Name, ..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary pb-3 custom-search-botton lora-font">
          find
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
