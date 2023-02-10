import React from "react";
import PostShort from "./PostShort";
import Searchbar from "./Searchbar";

function RecipeList({ recipes }) {
  return (
    <div>
      <Searchbar />
      {recipes.map((recipe) => (
        <div>
          <PostShort recipe={recipe} key={recipe.sys.id} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
