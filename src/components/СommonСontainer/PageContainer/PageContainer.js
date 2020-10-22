import React, { Component } from 'react'
import './PageContainer.css'
import ItemList from '../../item-list/item-list'
import Spiner from '../../spiner/spiner'
import PersonDetails from '../../person-details/person-details'

class PageContainer extends Component {

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
        const {list,idItem, info, imageUrl, requestList, placeholderImageUrl, page, togglePage} = this.props
       
        return (
            <div className='blockPage'>
                <ItemList {...this.props} togglePage={togglePage} page={page} list={list} idItem={idItem} requestList={requestList} />
                <PersonDetails {...this.props}  placeholderImageUrl={placeholderImageUrl} imageUrl={imageUrl} info={info} />
            </div>


        )
    }
}    


export default PageContainer 
