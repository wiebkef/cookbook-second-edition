import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
var contentful = require("contentful");

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntry(id)
      .then((entry) => {
        //console.log(id);
        //console.log("HERE", entry);
        setRecipe(entry);
        setLoading(false);
      })
      .catch(console.log("Promise: THERE IS AN ERROR"));
  }, []);
  //console.log("AHHHHH", recipe);
  //console.log(recipe.fields.time);
  //console.log(recipe.fields.image.fields.description);
  //console.log(recipe.)
  //const date = new Date(recipe.fields.date);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <div>{recipe.fields.time}</div>
        <div>{recipe.fields.level}</div>

        <div>{new Date(recipe.fields.date).toLocaleDateString()}</div>
        <h2>{recipe.fields.title}</h2>
        <p>{recipe.fields.description.content[0].content[0].value}</p>

        {/* We dont have tags yet in contentful */}

        <img
          src={recipe.fields.image.fields.file.url}
          className="imageSizing"
          alt={recipe.fields.image.fields.description}
        ></img>

        <h3>Ingredients</h3>
        {recipe.fields.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <h3>Preparation</h3>
        <div>{recipe.fields.preparation}</div>
      </div>
    );
  }
}

export default Recipe;
