import React from "react";

function PostShort({ recipe }) {
  const date = new Date(recipe.fields.date);

  console.log(date.toLocaleDateString());
  return (
    <div>
      <img
        src={recipe.fields.thumbnail.fields.file.url}
        className="imageSizing"
        alt={recipe.fields.image.fields.description}
      />
      <div>{recipe.fields.time}</div>
      <div>{recipe.fields.level}</div>
      <div>{date.toLocaleDateString()}</div>
      <h2>{recipe.fields.title}</h2>
      <p>{recipe.fields.description.content[0].content[0].value}</p>
      <button>read more</button>
    </div>
  );
}

export default PostShort;
