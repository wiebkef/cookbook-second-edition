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
  const [search, setSearch] = useState("Recipes");
  const [recipesSearch, setRecipesSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries("cookbook")
      .then((result) => {
        console.log("SHJSHJ", result);
        setRecipes(result.items);
      })
      .catch(console.error);
  }, []);

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

  const handleCategory = (search) => {

    console.log('WHAAAAAAAAAAAATT');
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

const handleHome = () => {
  console.log('WHAAAAAAAAAAAATT HOME?');
  client
  .getEntries("cookbook")
  .then((result) => {
    console.log("SHJSHJ", result);
    setRecipes(result.items);
  })
  .catch(console.error);
}


  return (
    <div className="App">
      <header>
        <Navigation handleHome={handleHome} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home recipes={recipes} handleSearch={handleSearch} searchTerm={search} setSearch={setSearch} handleCategory={handleCategory} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/recipes"
            element={
              <RecipeList
                recipes={recipes}
                handleSearch={handleSearch}
                loading={loading}
                setSearch={setSearch}
                searchTerm={search}
              />
            }
          />
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
