import React from 'react'
import Container from 'react-bootstrap/Container';
import LatestThumb from './LatestThumb';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Latest({ recipes }) {

  const handleDragStart = (e) => e.preventDefault();

  const items = recipes.map((thumb) => (
    <div className='latest-wrapper'>
      <LatestThumb thumb={thumb} key={thumb.sys.id} /> 
    </div>
));

  const responsive = {
    0: { items: 1 },
    768: { items: 2},
    1024: { items: 4},
  };


  return (
    <div>
      <Container>
        <div className='row'>

        {/* {recipes.map((thumb) => (
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-3'>
            <LatestThumb thumb={thumb} key={thumb.sys.id} /> 
          </div>
      ))} */}
        <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </div>
      </Container>
    </div>
  )
}

export default Latest
