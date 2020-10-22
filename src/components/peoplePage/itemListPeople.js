import React, { Component } from 'react'
// import ButtonTogglePage from './buttonTogglePage'
import '../item-list/item-list.css'
// import RenderItemPlanetList from './RenderItemPlanetList'
import RenderItemPeopleList from '../item-list/renderItemsPeople'
// import RenderItemStarshipsList from './RenderItemStarshipsList'


export default class ItemListPeople extends Component {

    componentDidMount() {
        const { requestList, page } = this.props
        
        requestList(page) // list People
    }

    componentDidUpdate(prevProps) {
        const { requestList, page } = this.props
        
        if (page !== prevProps.page) {
            requestList(page)
        }
    } 
    
    render() {
        
        const { list, setStartId, idItem, pagePeople, togglePagePeople } = this.props

        return (
            <div className='item-list mr-5'>
                <div>
                    <div className='d-flex justify-content-between'>
                        <button
                            className='btn btn-dark'
                            onClick={pagePeople > 1 ? ()=>togglePagePeople('m',pagePeople) : null}>Previous page</button>
                        <span className='d-inline-flex p-2 bd-highlight'>{pagePeople} number page </span>
                        <button
                            className='btn btn-dark'
                            onClick={list.length > 8 ? ()=>togglePagePeople('p',pagePeople) : null}>Next page</button>
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

