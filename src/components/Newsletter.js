import React from 'react';
import "./Footer.css"

const Newsletter = () => {
  const sectionStyle = {
    backgroundImage: 'path/to/images/wallpaper.jpg..jpeg',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px',
  };

  return (
    <div className='newsletter'>
      <div className='container d-flex justify-content-evenly'>
        <div className='row'>

          <div className='col'>
            <p>Receive our Updates</p>
            <ul className='text-unstyled'>
              <li>
                <a href=''>Home</a>
              </li>

            </ul>

          </div>

          <div className='btn'>
            <div className='container center'>
              <button type='button' className='but btn-outline-info'>
                Subscribe For Newsletter

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Newsletter;
