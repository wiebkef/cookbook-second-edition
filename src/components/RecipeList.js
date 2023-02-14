import React from "react";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";
import Searchbar from "./Searchbar";

function RecipeList({ recipes }) {
  return (
    <div>
      <HeroInternal />
      <Searchbar />
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>
          <PostShort recipe={recipe} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
