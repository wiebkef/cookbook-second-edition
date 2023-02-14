import React from 'react'
import Container from 'react-bootstrap/Container';
import LatestThumb from './LatestThumb';

function Latest({ recipes }) {
  return (
    <div>
      <Container>
        <div className='row'>

        {recipes.map((thumb) => (
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
            <LatestThumb thumb={thumb} key={thumb.sys.id} /> 
          </div>
      ))}

        </div>
      </Container>
    </div>
  )
}

export default Latest
