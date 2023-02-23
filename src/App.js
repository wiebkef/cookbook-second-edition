import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "./components/Nav";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import RecipeList from "./components/RecipeList";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Recipe from "./components/Recipe";
var contentful = require("contentful");

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("Recipes");
  const [loading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    client
      .getEntries("cookbook")
      .then((result) => {
        setRecipes(result.items);
      })
      .catch((err) => console.error(err));
  }, []);

  // Scroll page to top on page change - specially with footer links
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    client
      .getEntries({
        query: search,
      })
      .then((response) => {
        setRecipes(response.items);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleCategory = (search) => {
    client
      .getEntries()
      .then((response) => {
        const categoryRecipes = response.items.filter((item) => {
          return item.fields.categories === search;
        });
        setRecipes(categoryRecipes);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  const handleHome = () => {
    client
      .getEntries("cookbook")
      .then((result) => {
        setRecipes(result.items);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <header>
        <Navigation scrollToTop={scrollToTop} handleHome={handleHome} />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                recipes={recipes}
                handleSearch={handleSearch}
                searchTerm={search}
                setSearch={setSearch}
                handleCategory={handleCategory}
              />
            }
          />
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
          <Newsletter></Newsletter>

          <Footer scrollToTop={scrollToTop} handleHome={handleHome}>
            <div>Footer Section</div>
          </Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
