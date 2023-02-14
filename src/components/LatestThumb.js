import React from 'react'

function LatestThumb({thumb}) {
    console.log(thumb.fields.thumbnail.fields.file.url)
  return (

      <div className='thumbnail'>
        <img src={thumb.fields.thumbnail.fields.file.url} />
      </div>

  )
}

export default LatestThumb
