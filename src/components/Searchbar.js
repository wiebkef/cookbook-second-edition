import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import { Navigate, Routes, Route } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
var contentful = require("contentful");

const Searchbar = ({ handleSearch, setSearch }) => {
  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

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
      {/*   {recipes && <RecipeList recipes={recipes} searchTerm={search} />} */}
    </>
  );
};

export default Searchbar;
