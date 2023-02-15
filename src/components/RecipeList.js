import React from "react";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";
import Searchbar from "./Searchbar";

function RecipeList({
  recipes,
  handleSearch,
  setSearch,
  searchTerm
}) {

  console.log('Aqui eh o termo' + searchTerm)
  return (
    <div>
      <HeroInternal />
      <Searchbar handleSearch={handleSearch} setSearch={setSearch} />

      <h2>{searchTerm}</h2>
      {console.log(recipes.length)}
      {recipes.length > 0 ? (
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
