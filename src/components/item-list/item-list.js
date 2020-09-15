import React, { Component } from 'react'
import './item-list.css'
import RenderItemPeopleList from './renderItemsPeople'


export default class ItemList extends Component {

    componentDidMount() {
        const { requestListPeople, page } = this.props
        requestListPeople(page) // list People
    }

    componentDidUpdate(prevProps) {
        const { requestListPeople, page } = this.props
        if (page !== prevProps.page) {
            requestListPeople(page)
        }
    }

    render() {

        const { listPeople, setStartId, idItem, toggleNextPage,togglePrevPage, page } = this.props

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
                            onClick={listPeople.length > 8 ? ()=>toggleNextPage(page) : null}>Next page</button>
                    </div>
                </div>

                <ul className='list-group'>
                    <RenderItemPeopleList listPeople={listPeople} setStartId={setStartId} idItem={idItem} />
                </ul>
            </div>
        )
    }
}

