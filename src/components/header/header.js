import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header=()=>{

    return( 
        <div className='header d-flex align-items-center'>
            <h2 className='header__title'>Star DB</h2>
            <ul className='header__list d-sm-flex'>
                <li className='header__item'><Link className='header-item__link' to='/people'>People</Link></li>
                <li className='header__item'><Link className='header-item__link' to='/planets'>Planets</Link></li>
                <li className='header__item'><Link className='header-item__link' to='/starships'>Starships</Link></li>
            </ul>
        </div>
    )
} 

export default Header