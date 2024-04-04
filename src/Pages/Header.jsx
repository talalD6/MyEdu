import React, { useState } from 'react'

import logo from "./../assets/icons/logo.svg"
import logotitle from "./../assets/icons/logoTitle.svg"
import cart from "./../assets/icons/cart.svg"
import searchicon from "./../assets/icons/searchicon.svg"

import { Link } from 'react-router-dom'
import "./css/header.css"

const category = [
  {
    id: 1,
    name: "English"
  },
  {
    id: 2,
    name: "Maths"
  },
  {
    id: 3,
    name: "Science"
  },
  {
    id: 4,
    name: "History"
  },
  {
    id: 5,
    name: "Geography"
  },
  {
    id: 6,
    name: "Art"
  },
  {
    id: 7,
    name: "Biology"
  },
  {
    id: 8,
    name: "Proramming"
  },
  {
    id: 9,
    name: "Design"
  },
]

function Header() {
  const [openCategory, setOpenCategory] = useState(false);

  const handleCategory = () => {
    setOpenCategory((prev) => !prev)
  }



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


      <div className="pages">
        <ul className='navLinks'>
          <li className='navLink'><Link to="/course" ><button>Courses</button></Link></li>
          <li className='navLink' onMouseEnter={() => setOpenCategory(true)} onMouseLeave={() => setOpenCategory(false)} >
            <button >Category</button>
            {/* <Link to="/Category" ><button>Category</button></Link> */}
            <ul className={!openCategory ? 'hidden' : 'dropdown'} >
              {
                category.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={`/category/${item.name}`} onClick={() => setOpenCategory(false)}>
                        <button className='dropdownCategory'>{item.name}</button>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </li>
        </ul>
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
        <Link to="/login" ><button className='ghostbtn'>Teach mode</button></Link>
        <Link to="/login" ><button className='primarybtn'>Login</button></Link>
      </div>

    </div>
  )
}

export default Header