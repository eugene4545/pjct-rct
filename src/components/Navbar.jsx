import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
// import {GoThreeBars} from 'react-icons/go'
import './navbar.css'

import React from 'react'

    const Navbar = () => {
    return (
        <div className='container nav__container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt="Nav Logo" />
            </Link>
            <ul className='nav__links'>
                {links.map(({name, path}, index)=>{
                    return(
                        <li>
                            <NavLink to={path}>{name}</NavLink>
                        </li>
                    )
                })
            }
            </ul>
            <button className="nav__toggle-btn">
                {/* <GoThreeBars /> */}
            </button>
        </div>
    )
    }

    export default Navbar