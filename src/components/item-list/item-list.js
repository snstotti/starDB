import React, { Component } from 'react'
import './item-list.css'
// import SwapiService from '../../service/SwapiService'
import Spinner from '../spiner/spiner'
import {extractId} from '../helpers/getIdFromImage'
import Spiner from '../spiner/spiner'

export default class ItemList extends Component {

   

    state = {
        itemList: null,
        page: 4,
        
    }
    
    buttonNextPage=()=>{
        this.setState({
            page: this.state.page + 1
        })
    }
    
    
    componentDidMount() {

        const {getData, requestListPeople, listPeople, setStartId} = this.props
        const {setUrlProfile} = this.props
         // get url person people
         
        requestListPeople(this.state.page) // list People

       
        // setStartId(listPeople[0].id)
        // if (!listPeople.length >= 0){
        //     return <Spiner />
        // } else {
        //     const id = listPeople[0].id
        //     setStartId(id)
        // }
    
        
       
        
        
        
        // extractId(personUrl)
       
        
        // getData().then((itemList) => {
        //         this.setState({
        //             itemList
        //         })
        //     })
    }

    // componentDidUpdate(prevProps){
        
    //     if(this.state.page !== prevProps.page){
    //         return update
    //     }
    // }

    // renderItems = (arr) => {
    //     return arr.map((item) => {
    //         const {id, name} = item
    //         const label = this.props.renderItem(item)
    //         return (
    //             <li
    //                 onClick={()=>this.props.onItemSelected(id)}
    //                 key={id}
    //                 className='list-group-item list-group-item-action list'>
    //                 <span>{name} <span className='label'>{label}</span></span>
    //             </li>
    //         )
    //     })
    // }
    
    
   
    

    render() {
        
        const {listPeople, personUrl, onItemSelected, setStartId} = this.props

       
      

        const peopleList = listPeople.map(elem=>{
            const {name, birthYear, gender, id} = elem
            return <li id={id}
                key={id}
                onClick={()=>{setStartId(id)}}
                className='list-group-item list-group-item-action list'>
                    <span>{name}</span> <span className='label'>{birthYear}, {gender}</span>
            </li>
        })

        // const { itemList } = this.state

        // if (!itemList) {
        //     return <Spinner />;
        //   }
        if (!listPeople) {
            return <Spinner />;
          } else {
            
            
          }
        

        // const items = this.renderItems(itemList)

        return (
            <div className='item-list mr-5'>
                {/* <button onClick={this.buttonNextPage}>next</button> */}
                <ul className='list-group'>
                    {peopleList}
                    {/* {items} */}
                </ul>
            </div>
        )
    }
}

