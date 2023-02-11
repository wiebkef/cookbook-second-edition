import React from "react";



function Recipe({ recipe }) {
  console.log(recipe.fields.image.fields.description);
  return (
    <div>
      <h2>{recipe.fields.title}</h2>

      <p>{recipe.fields.description.content[0].content[0].value}</p>

      <img
        src={recipe.fields.image.fields.file.url}
        className="imageSizing"
        alt={recipe.fields.image.fields.description}
      ></img>
    </div>
  );
}

export default Recipe;
