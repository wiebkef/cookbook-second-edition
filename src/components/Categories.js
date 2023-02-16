import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import pork from "../images/pork.svg"
import beef from "../images/beef.svg"
import chicken from "../images/chicken.svg"
import fish from "../images/fish.svg"


function Categories({ recipes, handleSearch, setSearch, setSearchTerm, handleCategory }) {


  const recipeCategories = recipes.map(function(recipe) { return recipe.fields.categories; });

  const getUniqueCategories = (array) => ( [...new Set(array) ]);
  
  let uniqueCategories = getUniqueCategories(recipeCategories);

  

  return (
    <div>
        
        
        <div className='container categories'>
          <div className='row'>
          {uniqueCategories.length > 0 ? (   
          uniqueCategories.map((recipe) => (
          
            <div key={recipe} className='col-xs-12 col-sm-12 col-md-6 col-lg-3 '>
              <div className='images'>
              <Link to="/recipes" onClick={(e) => handleCategory(recipe)} >

              <img src={`./${recipe}.svg`}/>
                <h3>{recipe}</h3>
              </Link>
              </div>
            </div>
          
            ))
          ) : (
            <div>No results</div>
          )}


          </div>
        </div>

    </div>
  )
}

export default Categories
