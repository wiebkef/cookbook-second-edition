import "../css/Home.css";
import React, { useEffect } from 'react'
import Hero from "./Hero"
import Categories from "./Categories";
import Latest from "./Latest";


function Home({ recipes, handleSearch, setSearch, searchTerm, search, handleCategory }) {

useEffect(()=> {
  setSearch('Recipes');
})

  return (
    <div>
        <Hero />
        <Categories recipes={recipes} handleSearch={handleSearch} searchTerm={search} setSearch={setSearch} handleCategory={handleCategory} />
        <Latest recipes={recipes}  />
    </div>
  )
}

export default Home
