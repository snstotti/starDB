import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header=()=>{

    return(
        <div className='header d-flex align-items-center'>
            <h2 className='header-title'>Star DB</h2>
            <ul className='d-sm-flex nav-bar'>
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/planets'>Planets</Link></li>
                <li><Link to='/starships'>Starships</Link></li>
            </ul>
        </div>
    )
}

export default Header