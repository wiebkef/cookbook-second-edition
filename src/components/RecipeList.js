import React from "react";
import PostShort from "./PostShort";
import HeroInternal from "./HeroInternal";
import Searchbar from "./Searchbar";

function RecipeList({ recipes, handleSearch, setSearch, searchTerm }) {
  return (
    <div>
      <HeroInternal />
      <Searchbar handleSearch={handleSearch} setSearch={setSearch} />
      <div className="container">
        <h2 className="lora-font text-start mt-5">
          {searchTerm !== "Recipes"
            ? `Showing the results for "${searchTerm}"`
            : "Recipes"}
        </h2>
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <div className="my-5" key={recipe.sys.id}>
              <PostShort recipe={recipe} postColor={index} />
            </div>
          ))
        ) : (
          <div>No results</div>
        )}
      </div>
    </div>
  );
}

export default RecipeList;
