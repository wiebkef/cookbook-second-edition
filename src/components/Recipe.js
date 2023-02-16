import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroInternal from "./HeroInternal";
import Container from 'react-bootstrap/Container';
import Button from './Button'
import "../css/Recipe.css";
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
      <div  id="top">
      <HeroInternal />
      <Container>
        <div className='post-header background_0'>
          <div className="post-icons">
            <div className="icons-wrapper">
              <span class="material-symbols-outlined">schedule</span>
              {recipe.fields.time}
            </div>
            <div className="icons-wrapper">
              <span class="material-symbols-outlined">
              auto_fix_high
              </span>
              {recipe.fields.level}
            </div>
            <div className="icons-wrapper">
              <span class="material-symbols-outlined">
              calendar_month
              </span>
              {new Date(recipe.fields.date).toLocaleDateString()}
            </div>

          </div>
          <h2 className="lora-font">{recipe.fields.title}</h2>
          <p className="lora-font">{recipe.fields.description.content[0].content[0].value}</p>
          <div className="buttons-wrapper">
          <Button name="Ingredients" buttonClass="btn btn-primary" buttonTarget="#ingredients" />
          <Button name="Tap for method" buttonClass="btn btn-secondary" buttonTarget="#method" />
          </div>

        </div>
        <div className="recipe-main-image">   
        <img
          src={recipe.fields.image.fields.file.url}

          alt={recipe.fields.image.fields.description}
         />
        </div>
        <div id="ingredients" className="background_1">
          <h3 className="lora-font">Ingredients</h3>
          {recipe.fields.ingredients.map((ingredient, index) => (
            <li className="lora-font" key={index}>{ingredient}</li>
          ))}
        </div>

        <div id="method" className="background_2 mb-5">
        <h3 className="lora-font">Preparation</h3>
        <div className="lora-font">{recipe.fields.preparation}</div>
        <br />
        <div className="buttons-wrapper">
        <Button name="Back to the Top" buttonClass="btn btn-secondary" buttonTarget="#top" />
        </div>
        </div>

      </Container>


        <div></div>


        {/* We dont have tags yet in contentful */}




      </div>
    );
  }
}

export default Recipe;
