import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Button from "./components/Button";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact"
import Recipe from "./components/Recipe";
import Categories from "./components/Categories";

var contentful = require("contentful");

function App() {
  // this is just some spaceholder stuff until we have the actual contentful schemes and contents
  const SPACE_ID = "buwqs2m20r3f";
  const ENVIRONMENT_ID = "master";
  const ACCESS_TOKEN = "wKTnkMBASAaIl-QyQiJFVRVO6kpGoo9UM-x6oUK0m9g";
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: SPACE_ID,
      environment: ENVIRONMENT_ID,
      accessToken: ACCESS_TOKEN,
    });

    client
      .getEntries()
      .then((result) => {
        //console.log(result);
        setRecipes(result.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page-container">
      <div className="Content-wrap">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/recipes"
            element={<RecipeList recipes={recipes}  />}
          />
          <Route
            path="/recipes/:id"
            element={<Recipe recipes={recipes} />}
          />
        </Routes>
      </div>
      
      <header>
        <div>Hello Navbar</div>
      </header>
      <section id="main">
        <div>Hello main section</div>
        <RecipeList recipes={recipes} />
      </section>
      <hr />
      <Newsletter></Newsletter>
      <hr />
      <Footer>
        <div>Footer Section</div>
      </Footer>
    </div>
  );
}

export default App;
