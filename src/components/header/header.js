import React from 'react'
import './header.css'


const Header=()=>{

    return(

        <div className='header d-flex align-items-center'>
            
            <h2 className='header-title'>Star DB</h2>
            <ul className='d-sm-flex nav-bar'>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}

export default Header