import React from "react";
import { Link } from "react-router-dom";

function Categories({ recipes, handleCategory }) {
  const recipeCategories = recipes.map(function (recipe) {
    return recipe.fields.categories;
  });

  const getUniqueCategories = (array) => [...new Set(array)];

  let uniqueCategories = getUniqueCategories(recipeCategories);

  return (
    <div>
      <div className="container categories">
        <div className="row">
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((recipe) => (
              <div
                key={recipe}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-3 "
              >
                <div className="images">
                  <Link to="/recipes" onClick={(e) => handleCategory(recipe)}>
                    <img src={`./${recipe}.svg`} alt="a recipe" />
                    <h3>{recipe}</h3>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No results</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Categories;
