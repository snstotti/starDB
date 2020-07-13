import React, { Component } from 'react'
import './person-details.css'
import SwapiService from '../../service/SwapiService'
import Spiner from '../spiner/spiner'

const PeopleDetails =()=>{

    

    const { name, gender, birthYear, eyeColor } = this.state.details

    return (
        <div className='personDetails d-flex jumbotron'>
            <div>
                <img className='planets-img' src={this.state.image} alt='' />
            </div>

            <div className='description'>
                <h3>{name} </h3>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">Gender: {gender} </li>
                    <li className="list-group-item list-description">Birth year: {birthYear} </li>
                    <li className="list-group-item list-description">Eye color: {eyeColor} </li>
                </ul>
            </div>
        </div>
    )
}




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
        if (this.props.personId !== prevProps.personId) {
            this.onUpdatePerson()
        }
    }

    onUpdatePerson = () => {
        const { personId, getDetails, getUrl } = this.props

        if (!personId) {
            return <Spiner />
        }


        getDetails(personId)
            .then((details) => {
                this.setState({
                    details,
                    image: getUrl(details)
                })
            })
    }

    render() {
        if (!this.state.details) {
            return <Spiner />
        }
        return(
            <PeopleDetails/>
        )
       
       
    }
}