import React, { Component } from 'react'
import './item-list.css'
import SwapiService from '../../service/SwapiService'
import Spinner from '../spiner/spiner'


export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems = (arr) => {
        return arr.map(({id, name}) => {
            return (
                <li
                    onClick={()=>this.props.onItemSelected(id)}
                    key={id}
                    className='list-group-item list-group-item-action list'>
                    {name}
                </li>
            )
        })
    }



    render() {

        
        const { peopleList } = this.state

        if (!peopleList) {
            return <Spinner />;
          }

        const items = this.renderItems(peopleList)
      
        

        return (
            <div className='item-list mr-5'>
                <ul className='list-group'>
                    {items}
                </ul>
            </div>
        )
    }
}

