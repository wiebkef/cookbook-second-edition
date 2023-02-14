import React from 'react'
import Container from 'react-bootstrap/Container';
import LatestThumb from './LatestThumb';

function Latest({ recipes }) {
  return (
    <div>
      <Container>
        <div className='latest-news'>

        {recipes.map((thumb) => (

        <LatestThumb thumb={thumb} key={thumb.sys.id} /> 
   
      ))}

        </div>
      </Container>
    </div>
  )
}

export default Latest
