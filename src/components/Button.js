import React from 'react'

function Button({ buttonClass, name,  buttonTarget}) {
  return (

      <a className={buttonClass} href={buttonTarget}>{name}</a>

  )
}

export default Button
