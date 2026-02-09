import React from 'react'

function Button({text, fill}) {
  return (
    <>
    <button className={`btn ${fill ? 'fill' : 'trns'}`}>{text}</button>
    </>
  )
}

export default Button