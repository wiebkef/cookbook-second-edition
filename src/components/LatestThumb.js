import React from "react";
import { Link } from "react-router-dom";

function LatestThumb({ thumb }) {
  return (
    <div className="thumbnail">
      <Link to={`/recipes/${thumb.sys.id}`}>
        <img
          src={thumb.fields.thumbnail.fields.file.url}
          alt="latest recipes"
        />
        <h3>{thumb.fields.title}</h3>
      </Link>
    </div>
  );
}

export default LatestThumb;
