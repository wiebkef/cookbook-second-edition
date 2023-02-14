import "../css/Home.css";
import React from 'react'
import Hero from "./Hero"
import Categories from "./Categories";
import Latest from "./Latest";


function Home({ recipes }) {
  return (
    <div>
        <Hero />
        <Categories />
        <Latest recipes={recipes}  />
    </div>
  )
}

export default Home
