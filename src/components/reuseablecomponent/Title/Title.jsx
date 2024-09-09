import React from 'react'

import './Title.css'

function Title({title, textColor, textAlign}) {
  return (
   <h1 className='h1heading' 
   style={{
    color: textColor,
    textAlign: textAlign

   }}>{title}</h1>
  )
}

export default Title
