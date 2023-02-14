import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import { Navigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
var contentful = require("contentful");

const Searchbar = () => {
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
    client
      .getEntries({
        query: search,
      })
      .then((response) => {
        console.log(response.items);
        //console.log("HERE", entry);
        setRecipes(response.items);
        setLoading(false);
      })
      .catch(console.log("Promise: THERE IS AN ERROR"));
  };

  return (
    <>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <FloatingLabel
            controlId="floatingInput"
            label="Find a recipe"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => setSearch(e.target.value)}
            />
          </FloatingLabel>
          <div>
            <button className="btn btn-primary">Find</button>
          </div>
        </Form.Group>
      </Form>
      {recipes && <RecipeList recipes={recipes} searchTerm={search} />}
    </>
  );
};

export default Searchbar;
