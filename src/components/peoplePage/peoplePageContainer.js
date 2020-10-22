import React, { Component } from 'react'
import '../СommonСontainer/PageContainer/PageContainer.css'
import ItemList from '../item-list/item-list'
import Spiner from '../spiner/spiner'
import PersonDetails from '../person-details/person-details'
import ItemListPeople from './itemListPeople'

class PeoplePageContainer extends Component {

    componentDidMount() {
        this.onUpdatePerson()
    }
    componentDidUpdate(prevProps) {
       
        if (this.props.idItem !== prevProps.idItem) {
             this.onUpdatePerson() 
        }
    }

    onUpdatePerson = () => {
        const {  setStartId, getImage, requestInfo, idItem} = this.props
        if (!idItem) {
            return <Spiner />
        }
        
        setStartId(idItem)
        getImage(idItem)
        requestInfo(idItem)
    }

   
    render() {
        const {list,idItem, info,
             imageUrl, requestList, placeholderImageUrl, 
             pagePeople, togglePagePeople} = this.props
       
        return (
            <div className='blockPage'>
                <ItemListPeople 
                    togglePagePeople={togglePagePeople} 
                    pagePeople={pagePeople} 
                    list={list} 
                    idItem={idItem} 
                    requestList={requestList}  
                    {...this.props} />
                    
                <PersonDetails   
                    placeholderImageUrl={placeholderImageUrl} 
                    imageUrl={imageUrl} 
                    info={info} 
                    {...this.props} />
            </div>


        )
    }
}    


export default PeoplePageContainer 
