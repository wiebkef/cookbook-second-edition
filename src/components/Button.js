import React from 'react'

function Button({ buttonClass, name,  buttonTarget}) {
  return (
    <div>
      <button className={buttonClass} onClick={buttonTarget}>{name}</button>
    </div>
  )
}

export default Button
