import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.sys.id} />
      ))}
    </div>
  );
}

export default RecipeList;
