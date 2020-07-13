import React, { Component } from 'react'
import './item-list.css'
// import SwapiService from '../../service/SwapiService'
import Spinner from '../spiner/spiner'


export default class ItemList extends Component {

   

    state = {
        itemList: null
    }

    

    componentDidMount() {
        
        const {getData} = this.props
        
        getData().then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems = (arr) => {
        return arr.map((item) => {
            const {id, name} = item
            const label = this.props.renderItem(item)
            return (
                <li
                    onClick={()=>this.props.onItemSelected(id)}
                    key={id}
                    className='list-group-item list-group-item-action list'>
                    <span>{name} <span className='label'>{label}</span></span>
                </li>
            )
        })
    }

    render() {
  
        const { itemList } = this.state

        if (!itemList) {
            return <Spinner />;
          }

        const items = this.renderItems(itemList)

        return (
            <div className='item-list mr-5'>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>
        )
    }
}

