import React, { Component } from 'react'
import './item-list.css'
import RenderItemPlanetList from './RenderItemPlanetList'
import RenderItemPeopleList from './renderItemsPeople'
import RenderItemStarshipsList from './RenderItemStarshipsList'


export default class ItemList extends Component {

    componentDidMount() {
        const { requestList, page,name } = this.props
        requestList(name,page) // list People
        
    }

    componentDidUpdate(prevProps) {
        const { requestList, page,name } = this.props
        if (page !== prevProps.page) {
            requestList(name,page)
        }
    }
    
    render() {
        
        const { list, setStartId, idItem, toggleNextPage,togglePrevPage, page, name } = this.props
       console.log(name);
        return (
            <div className='item-list mr-5'>
                <div>
                    <div className='d-flex justify-content-between'>
                    
                        <button
                            className='btn btn-dark'
                            onClick={page > 1 ? ()=>togglePrevPage(page) : null}>Previous page</button>
                        <span className='d-inline-flex p-2 bd-highlight'>{page} number page </span>
                        <button
                            className='btn btn-dark'
                            onClick={list.length > 8 ? ()=>toggleNextPage(page) : null}>Next page</button>
                    </div>
                </div>

                <ul className='list-group'>
                    {name === 'people' ? <RenderItemPeopleList list={list} setStartId={setStartId} idItem={idItem}/>
                    : name === 'planets' ? <RenderItemPlanetList list={list} setStartId={setStartId} idItem={idItem}/>
                    : name === 'starships' ? <RenderItemStarshipsList list={list} setStartId={setStartId} idItem={idItem}/> 
                    : null}
                </ul>
            </div>
        )
    }
}

