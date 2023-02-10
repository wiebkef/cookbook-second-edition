import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Searchbar = () => {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <FloatingLabel
          controlId="floatingInput"
          label="Find a recipe"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="" />
        </FloatingLabel>
        <div>
          <button className="btn btn-primary">Find</button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Searchbar;
