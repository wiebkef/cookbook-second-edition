import React from "react";
import PostShort from "./PostShort";
import Searchbar from "./Searchbar";

function RecipeList({ recipes }) {
  return (
    <div>
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
