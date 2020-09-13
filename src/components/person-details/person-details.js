import React, { Component } from 'react'
import './person-details.css'
import SwapiService from '../../service/SwapiService'
import Spiner from '../spiner/spiner'




export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        details: null,
        image: null
    }

    componentDidMount() {
       
        this.onUpdatePerson()
    }

    componentDidUpdate(prevProps) {
        if (this.props.idItem !== prevProps.idItem) {
            this.onUpdatePerson()
        }
    }

    onUpdatePerson = () => {
        const { personId, requestPeopleInfo, getUrl,setStartId, setUrlimageProfile, selectedId, idItem } = this.props

        if (!idItem) {
            return <Spiner />
        }
        setStartId(idItem)
        setUrlimageProfile(idItem)
        requestPeopleInfo(idItem)
        
        // requestPeopleInfo(personId)
        //     .then((details) => {
        //         this.setState({
        //             details,
        //             image: getUrl(details)
                
        //         })
                
        //     })
    }

    render() {
        const {renderDetails, imageUrl, peopleInfo} = this.props
        if (!imageUrl) {
            return <div>cli</div>
        }

        const { name, gender, birthYear, eyeColor, hairColor } = peopleInfo
        
        
        return(
            <div className='personDetails d-flex jumbotron'>
            <div>
                <img className='planets-img' 
                // src={this.state.image} 
                src={imageUrl}
                alt='' />
            </div>

            <div className='description'>
                <h3>{name} </h3>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">Gender: {gender} </li>
                    <li className="list-group-item list-description">Birth year: {birthYear} </li>
                    <li className="list-group-item list-description">Eye color: {eyeColor} </li>
                    <li className="list-group-item list-description">Hair color: {hairColor} </li>
                    {renderDetails}
                </ul>
            </div>
        </div>
        )
       
       
    }
}