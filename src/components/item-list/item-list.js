import React, { useEffect } from 'react'
import './item-list.css'

const ItemList =({ list, page, togglePage,requestList,children})=>{
    
    useEffect(()=>{
        requestList(page)
    },[page,requestList])
    
        return (
            <div className='item-list mr-5'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <button
                            className={page > 1 ? 'btn btn-dark' : 'btn btn-dark disabled'}
                            onClick={page > 1 ? ()=>togglePage('m',page) : null}>Previous page</button>
                        <span className='d-inline-flex p-2 bd-highlight'>{page} number page </span>
                        <button
                            className={list.length ? 'btn btn-dark' : 'btn btn-dark disabled'}
                            onClick={list.length ? ()=>togglePage('p',page) : null}>Next page</button>
                    </div>
                </div>
                  
                <ul className='list-group'>
                    {children}
                </ul>
            </div>
        )
    
}

export default ItemList