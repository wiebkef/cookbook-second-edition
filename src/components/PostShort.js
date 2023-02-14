import React from "react";
import { Route } from "react-router-dom";

function PostShort({ recipe }) {
  return (
    <div>
      <img
        src={recipe.fields.thumbnail.fields.file.url}
        className="imageSizing"
        alt={recipe.fields.image.fields.description}
      />
      <div>{recipe.fields.time}</div>
      <div>{recipe.fields.level}</div>
      <div>{new Date(recipe.fields.date).toLocaleDateString()}</div>
      <h2>{recipe.fields.title}</h2>
      <p>{recipe.fields.description.content[0].content[0].value}</p>
      <a href={`/recipes/${recipe.sys.id}`}>read more</a>
    </div>
  );
}

export default PostShort;
