import React from 'react'
import './header.css'

const Header=()=>{

    return(
        <div className='header d-flex align-items-center'>
            <h2 className='header-title'>Star DB</h2>
            <ul className='d-sm-flex nav-bar'>
                <li><a href='/people'>People</a></li>
                <li><a href='/planets'>Planets</a></li>
                <li><a href='/starships'>Starships</a></li>
            </ul>
        </div>
    )
}

export default Header