import React from 'react'
import './ReturnHome.css'
import { Link } from 'react-router-dom'

function ReturnHome() {
  return (
    <Link className='returnHome' to="/">Return Home</Link>
  )
}

export default ReturnHome