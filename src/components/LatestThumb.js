import React from 'react'
import { Link } from 'react-router-dom'

function LatestThumb({thumb}) {
    console.log(thumb.fields)
  return (

      <div className='thumbnail'>
        <Link to={`/recipes/${thumb.sys.id}`}>
          <img src={thumb.fields.thumbnail.fields.file.url} />
          <h3>{thumb.fields.title}</h3>   
        </Link>
      </div>

  )
}

export default LatestThumb
