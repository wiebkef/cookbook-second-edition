import React from "react";
import Recipe from "./Recipe";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";

function RecipeList({ recipes }) {
  return (
    <div>
      <HeroInternal />
      {recipes.map((recipe) => (
        <div>
        <Recipe recipe={recipe} key={recipe.sys.id} /> 
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
