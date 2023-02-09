import "./App.css";
import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
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
