import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Button from "./components/Button";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
import Categories from "./components/Categories";



var contentful = require("contentful");

function App() {
  // this is just some spaceholder stuff until we have the actual contentful schemes and contents

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });

    client
      .getEntries("cookbook")
      .then((result) => {
        console.log("SHJSHJ", result);
        setRecipes(result.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
        <header>
        <Navigation/>
        </header>
        <main> 

        <Routes>
          <Route path="/" element={<Home recipes={recipes} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipes/:id" element={<Recipe recipes={recipes} />} />
        </Routes>
        </main>  
        
        <div className="page-container">
        <div className="Content-wrap">
          <hr />
          <Newsletter></Newsletter>
          <hr />
          <Footer>
            <div>Footer Section</div>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
