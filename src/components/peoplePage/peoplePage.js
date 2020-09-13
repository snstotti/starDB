import React, { Component } from 'react'
import './peoplePage.css'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
// import { imageProfile } from '../redux/peoplePageReduce'
// import { profileAPI } from '../API/Api'



export default class PeoplePage extends Component {

    state = {
        ItemSelected: 4,
        hasError: false
    }

    // onItemSelected = (id) => {
    //     this.setState({
    //         ItemSelected: id
    //     })
    // }

    // componentDidCatch(){ // error
    //     this.setState({
    //         hasError: true
    //     })
    // }

    render() {
        const { getData, selectedId, getDetails, getUrl, peopleInfo, setUrlimageProfile, requestPeopleInfo, imageProfile, imageUrl, listPeople, requestListPeople, setStartId, personUrl, setUrlProfile, onItemSelected, idItem } = this.props


        
        


        
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
                    // onItemSelected={this.onItemSelected}
                    onItemSelected={onItemSelected}
                    // planetInfo={planetInfo}
                    selectedId={selectedId}
                    getData={getData}
                    requestListPeople={requestListPeople}
                    listPeople={listPeople}
                    setUrlProfile={setUrlProfile}
                    personUrl={personUrl}
                // renderItem={({gender, birthYear})=> `${gender}, ${birthYear}`} 
                />
                <PersonDetails
                    setStartId={setStartId}
                    idItem={idItem}
                    selectedId={selectedId}
                    getDetails={getDetails}
                    getUrl={getUrl}
                    requestPeopleInfo={requestPeopleInfo}
                    setUrlimageProfile={setUrlimageProfile}
                    peopleInfo={peopleInfo}
                    imageUrl={imageUrl}
                // renderDetails={renderDetails} 
                />
            </div>
        )
    }
}

