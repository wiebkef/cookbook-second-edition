import React from "react";

function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.fields.recipeName}</h1>
      <div>{recipe.fields.instructions}</div>
    </div>
  );
}

export default Recipe;
