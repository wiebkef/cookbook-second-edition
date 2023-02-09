import React from "react";
import Recipe from "./components/Recipe";
import PostShort from "./components/PostShort";

function RecipeList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe) => (
        /*   <Recipe recipe={recipe} key={recipe.sys.id} /> */
        /* here should be the PostShort componentn*/
        <div></div>
      ))}
    </div>
  );
}

export default RecipeList;
