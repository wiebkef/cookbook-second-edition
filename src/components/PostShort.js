import React from "react";
import "../css/PostShort.css";

function PostShort({ recipe, postColor }) {
  const modColor = postColor % 4;
  let colorClass;

  switch (modColor) {
    case 0:
      colorClass = "bg_0";
      break;
    case 1:
      colorClass = "bg_1";
      break;
    case 2:
      colorClass = "bg_2";
      break;
    default:
      colorClass = "bg_3";
      break;
  }

  return (
    <div className={`${colorClass} d-flex postShortCard`}>
      <div className="row justify-content-start">
        <div className="col-3  p-0">
          <img
            src={recipe.fields.thumbnail.fields.file.url}
            className="img-fluid d-block start"
            alt={recipe.fields.image.fields.description}
          />
        </div>
        <div className="col-9">
          <div className="d-flex flex-col justify-content-end">
            <div className="iconsFirstShort-wrapper p-3">
              <span class="material-symbols-outlined">schedule</span>
              {recipe.fields.time}
            </div>
            <div className="iconsShort-wrapper p-3">
              <span class="material-symbols-outlined">auto_fix_high</span>
              {recipe.fields.level}
            </div>
            <div className="iconsShort-wrapper p-3">
              <span class="material-symbols-outlined">calendar_month</span>
              {new Date(recipe.fields.date).toLocaleDateString()}
            </div>
          </div>
          <div className="lora-font text-start ps-3">
            <h2>{recipe.fields.title}</h2>
            <p>{recipe.fields.description.content[0].content[0].value}</p>
            <a className="btn btn-primary" href={`/recipes/${recipe.sys.id}`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostShort;
