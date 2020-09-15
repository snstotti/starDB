import React, { Component } from 'react'
import './peoplePage.css'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'




export default class PeoplePage extends Component {

    state = {
        hasError: false
    }

    render() {
        const { selectedId, getDetails, getUrl, peopleInfo, setUrlimageProfile, requestPeopleInfo, imageUrl, listPeople, requestListPeople, setStartId, onItemSelected, idItem, page, toggleNextPage, togglePrevPage } = this.props

        if (this.state.hasError) {
            return (
                <ErrorIndicator /> // error
            )
        }

        return (
            <div className='blockPage'>
                <ItemList
                    setStartId={setStartId}
                    idItem={idItem}
                    onItemSelected={onItemSelected}
                    selectedId={selectedId}
                    requestListPeople={requestListPeople}
                    listPeople={listPeople}
                    page={page}
                    toggleNextPage={toggleNextPage}
                    togglePrevPage={togglePrevPage} />
                <PersonDetails
                    setStartId={setStartId}
                    idItem={idItem}
                    selectedId={selectedId}
                    getDetails={getDetails}
                    getUrl={getUrl}
                    requestPeopleInfo={requestPeopleInfo}
                    setUrlimageProfile={setUrlimageProfile}
                    peopleInfo={peopleInfo}
                    imageUrl={imageUrl} />
            </div>
        )
    }
}

