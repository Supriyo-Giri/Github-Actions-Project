import React, { useState } from 'react'
import './components.css'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState("link")

  return (
    <div className='navbar'>
        <div className="logo">
            <Link to={'/'} className='link-home'>
                <img src="" alt="" />
                <img src={logo} alt="" className='logo-img' />
                <p>Supriyo</p>
            </Link>
        </div>
        {/* <ul className="navlinks">
            <Link to={'/'} className='link'><li>Home</li></Link>
            <Link to={'/about'} className='link'><li>About</li></Link>
            <Link to={'/skills'} className='link'><li>Skills</li></Link>
            <Link to={'/projects'} className='link'><li>Projects</li></Link>
            <Link to={'/experience'} className='link'><li>Experience</li></Link>
        </ul> */}
        <Link to={'/contact'} className='link-btn'>
            <button className="animated-button">
            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            <span className="text">Contact me</span>
            <span className="circle"></span>
            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                ></path>
            </svg>
            </button>
        </Link>


    </div>
  )
}

export default Navbar