import React from 'react'

import './Navbar.css'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

import bell_icon from '../../assets/bell_icon.svg'

import profile_img from '../../assets/profile_img.png'

import caret_icon from '../../assets/caret_icon.svg'

import SearchBar from '../SearchBar/SearchBar'









const Navbar = () => {

  return (

    <div className='navbar'>

       <div className="navbar-left">

        <Link to="/"><img src={logo} alt="" /></Link>

        <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/tv-shows">TV shows</Link></li>

            <li><Link to="/new-popular">New & Popular</Link></li>

            <li><Link to="/watchlist">My List</Link></li>

            <li><Link to="/browse-languages">Browse by Languages</Link></li>

        </ul>

        </div>

       <div className="navbar-right">

        <SearchBar />

        <p>Children</p>

        <img src={bell_icon} alt="" className='icons' />

        <div className="navbar-profile">

            <img src={profile_img} alt="" className='profile' />

            <img src={caret_icon} alt="" />

            <div className="dropdown">

                <p>Sign out of Netflix</p>

            </div>

        </div>





        </div>







    </div>

  )

}



export default Navbar 

