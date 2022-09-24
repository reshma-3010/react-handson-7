import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex'>
      <Link className='decoration' to='/'>Home</Link>
      <Link className='decoration' to='/Students'>Students</Link>
      <Link  className='decoration'to='/ContactUs'>Contact Us</Link>
    </div>
  )
}

export default Navbar;