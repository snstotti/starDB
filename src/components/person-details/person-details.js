import React, { Component } from 'react'
import './person-details.css'
import Spiner from '../spiner/spiner'
import DescriptionInfoPeople from './descriptionInfoPeople'




export default class PersonDetails extends Component {

    componentDidMount() {
        this.onUpdatePerson()
    }
    componentDidUpdate(prevProps) {
        if (this.props.idItem !== prevProps.idItem) {
            this.onUpdatePerson()
        }
    }

    onUpdatePerson = () => {
        const { requestPeopleInfo, setStartId, setUrlimageProfile, idItem } = this.props
        if (!idItem) {
            return <Spiner />
        }
        setStartId(idItem)
        setUrlimageProfile(idItem)
        requestPeopleInfo(idItem)
    }

    render() {
        const {imageUrl, peopleInfo} = this.props
        if (!imageUrl ) {
            return <Spiner />
        } 
        return(
            <DescriptionInfoPeople peopleInfo={peopleInfo} imageUrl={imageUrl} />
        )
    }
}

