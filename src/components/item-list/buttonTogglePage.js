import React, { Component } from 'react'



const ButtonTogglePage = ({pagePeople, pagePlanets,togglePage, list, way}) => {
    
    let page

    if(way==='planet'){
       page = pagePlanets
    } else if(way==='people'){
        page = pagePeople
    } else {page=null}
    console.log(page);
    return (

        <div className='d-flex justify-content-between'>
            <button
                className='btn btn-dark'
                onClick={page > 1 ? () => togglePage('m', page) : null}>Previous page</button>
            <span className='d-inline-flex p-2 bd-highlight'>{page} number page </span>
            <button
                className='btn btn-dark'
                onClick={list.length > 8 ? () => togglePage('p', page) : null}>Next page</button>
        </div>

    )

}

export default ButtonTogglePage