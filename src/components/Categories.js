import React from 'react'
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import pork from "../images/pork.svg"
import beef from "../images/beef.svg"
import chicken from "../images/chicken.svg"
import fish from "../images/fish.svg"


function Categories({ recipes, handleSearch, setSearch, setSearchTerm, handleCategory }) {
  
  return (
    <div>
        
        
        <div className='container categories'>
          <div className='row'>
          {recipes.length > 0 ? (
          recipes.map((recipe) => (
          
            <div key={recipe.sys.id} className='col-xs-12 col-sm-12 col-md-6 col-lg-3 '>
              <div className='images'>
              <Link to="/recipes" onClick={(e) => handleCategory(recipe.fields.categories)} >

              <img src={`./${recipe.fields.categories}.svg`}/>
                <h3>{recipe.fields.categories}</h3>
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
