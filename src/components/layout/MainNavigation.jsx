import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import logo from '../../assets/logo.png'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        
        <Link to='/'><div className={classes.logo}>
        <img src={logo} alt="Logo" />
        Meet-Up
        </div></Link>
        
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'>Favourites</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation