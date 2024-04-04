import React from 'react'

import logo from "./../assets/icons/logo.svg"
import logotitle from "./../assets/icons/logoTitle.svg"
import cart from "./../assets/icons/cart.svg"
import searchicon from "./../assets/icons/searchicon.svg"

import { Link } from 'react-router-dom'
import "./css/header.css"


function Header() {
  return (
    <div className='navmenu container'>
      <div>
        <Link to="/" >
          <div className='logo'>
            <img src={logo} />
            <img src={logotitle} />
          </div>
        </Link>
      </div>
      <div className='pages'>
        <Link to="/" ><button>Home</button></Link>
        <Link to="/courses" ><button>Courses</button></Link>
        <Link to="/events" ><button>Events</button></Link>
      </div>
      <div className="search">
        <input className='search-input' type="text" placeholder='search for course' />
        <img src={searchicon} />
      </div>
      <div>
        <Link to="/cart" >
          <div className='cart'>
            <img src={cart} className='imgcart' />
            <div className='circle'>0</div>
          </div>
        </Link>
      </div>
      <div className='login'>
        <Link to="/login" ><button className='ghostbtn'>Login</button></Link>
        <Link to="/login" ><button className='primarybtn'>Signup</button></Link>
      </div>

    </div>
  )
}

export default Header