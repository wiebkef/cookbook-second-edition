import React from "react";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";
import Searchbar from "./Searchbar";

function RecipeList({
  recipes,
  handleSearch,
  setSearch,
  searchTerm = "Recipes",
}) {
  return (
    <div>
      <HeroInternal />
      <Searchbar handleSearch={handleSearch} setSearch={setSearch} />
      <h2>{searchTerm}</h2>
      {recipes.length <= 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.sys.id}>
            <PostShort recipe={recipe} />
          </div>
        ))
      ) : (
        <div>No results</div>
      )}
    </div>
  );
}

export default RecipeList;
