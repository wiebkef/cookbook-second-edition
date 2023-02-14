import React from "react";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";
import Searchbar from "./Searchbar";

function RecipeList({ recipes, searchTerm = "Recipes" }) {
  return (
    <div>
      <HeroInternal />
      <Searchbar />
      <h2>{searchTerm}</h2>
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <PostShort recipe={recipe} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
