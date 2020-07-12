import React,{Component} from 'react'
import './person-details.css'
import SwapiService from '../../service/SwapiService'
import Spiner from '../spiner/spiner'

export default class PersonDetails extends Component{

    swapiService = new SwapiService()

    state={
        person:null
    }

    componentDidMount(){
        this.onUpdatePerson()
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.onUpdatePerson()
        }
    }

    onUpdatePerson=()=>{
        const {personId} = this.props

        if(!personId){
            return <Spiner />
        }

        this.swapiService
        .getPerson(personId)
        .then((person)=>{
            this.setState({
                person
            })
        })
    }

    render(){
        if(!this.state.person){
            return <Spiner />
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person
       

        return (
            <div className='personDetails d-flex jumbotron'>
                <div>
                <img className='planets-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='' />
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
}