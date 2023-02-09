import "./App.css";
import { useState, useEffect } from "react";
import Nav from ".components/Nav.js";
import Newsletter from ".components/Newsletter.js";
import Button from ".components/Button.js";
import Footer from ".components/Footer.js";
import RecipeList from "./components/RecipeList";
import Home from "./components/Home.js";
import About from "./components/About.js";
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
    <div className="App">
      <header>
        <div>Hello Navbar</div>
      </header>
      <section id="main">
        <div>Hello main section</div>
        <RecipeList recipes={recipes} />
      </section>
      <footer>
        <div>hello footer</div>
      </footer>
    </div>
  );
}

export default App;
