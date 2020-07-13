import React from 'react'
import './errorIndicator.css'
import Icon from './icon-deathStar.ico'

const ErrorIndicator = ()=>{
    return (
        <div className='error'>
            <img src={Icon} alt='' width='100px' />
            <span>FUCK</span>
            <span>Something is broken, we will repair</span>
        </div>
    )
}

export default ErrorIndicator