import React from 'react'
import './errorIndicator.css'

const ErrorIndicator = ()=>{
    return (
        <div className='error'>
            <img src='https://www.iconarchive.com/download/i106854/goodstuff-no-nonsense/free-space/death-star.ico' alt='' width='100px' />
            <span>FUCK</span>
            <span>Something is broken, we will repair</span>
        </div>
    )
}

export default ErrorIndicator