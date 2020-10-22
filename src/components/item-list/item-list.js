import React, { Component } from 'react'
import ButtonTogglePage from './buttonTogglePage'
import './item-list.css'
// import RenderItemPlanetList from './RenderItemPlanetList'
import RenderItemPeopleList from './renderItemsPeople'
// import RenderItemStarshipsList from './RenderItemStarshipsList'


export default class ItemList extends Component {

    componentDidMount() {
        const { requestList, page } = this.props
        // let page
        // if(way==='planet'){
        //     page = pagePlanets
        //  } else if(way==='people'){
        //      page = pagePeople
        //  } 
        requestList(page) // list People
    }

    componentDidUpdate(prevProps) {
        const { requestList, page } = this.props
        
        if (page !== prevProps.page) {
            requestList(page)
        }
    } 
    
    render() {
        
        const { list, setStartId, idItem,  page, togglePage, way } = this.props
    

   

        return (
            <div className='item-list mr-5'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <button
                            className='btn btn-dark'
                            onClick={page > 1 ? ()=>togglePage('m',page) : null}>Previous page</button>
                        <span className='d-inline-flex p-2 bd-highlight'>{page} number page </span>
                        <button
                            className='btn btn-dark'
                            onClick={list.length > 8 ? ()=>togglePage('p',page) : null}>Next page</button>
                    </div>
                </div>
                {/* < ButtonTogglePage way={way} pagePlanets={pagePlanets} pagePeople={pagePeople} togglePage={togglePage} list={list} /> */}
               
                <ul className='list-group'>
                    <RenderItemPeopleList list={list} setStartId={setStartId} idItem={idItem} />
                </ul>
            </div>
        )
    }
}

