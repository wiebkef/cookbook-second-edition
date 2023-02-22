import React from "react";
import Container from "react-bootstrap/Container";
import LatestThumb from "./LatestThumb";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Latest({ recipes }) {
  const items = recipes.map((thumb) => (
    <div className="latest-wrapper">
      <LatestThumb thumb={thumb} key={thumb.sys.id} />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div>
      <Container>
        <div className="row">
          <AliceCarousel mouseTracking items={items} responsive={responsive} />
        </div>
      </Container>
    </div>
  );
}

export default Latest;
