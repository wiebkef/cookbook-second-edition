import "./App.css";
import { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
var contentful = require("contentful");

function App() {
  // this is just some spaceholder stuff until we have the actual contentful schemes and contents

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      environment: process.env.REACT_APP_ENVIRONMENT_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });

    client
      .getEntries()
      .then((result) => {
        console.log(result.items);
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
