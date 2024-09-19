import React from 'react'
import logo from '../Images/logo.png'
export default function header() {
  return (
    
     <header>
        <nav className="navbar bg-nav">
  <div className="container flex-wrap d-flex justify-content-between">
    <a className="navbar-brand d-flex align-items-center" href="#">
      <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
         <h5 className='px-2 text-light'>Meme Generator</h5>
    </a>
    <h5 className='text-light fs-5 my-2'>React-Course Project3</h5>
  </div>
</nav>
     </header>
  )
}
