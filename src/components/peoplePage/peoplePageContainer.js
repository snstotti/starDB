

import React, { Component } from 'react'
import './peoplePage.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PeoplePage from './peoplePage'
import { setUrlimageProfile, requestListPeople, setUrlProfile, requestPeopleInfo, setStartId } from '../redux/peoplePageReduce'
// import { imageProfile } from '../redux/peoplePageReduce'
// import { profileAPI } from '../API/Api'




 class PeoplePageContainer extends Component {

    state ={
        ItemSelected: this.props.idItem
    }

    componentDidMount(){
        // const {listPeople} = this.props
        // console.log(listPeople[0].id)
    }
    

    onItemSelected = (id) => {

        this.props.setStartId(id)
        }
    


    render() {
        
    //   console.log(this.props.listPeople[0].id);
        return (
            <PeoplePage {...this.props} selectedId={this.state.ItemSelected} onItemSelected={this.onItemSelected} />
        )
            
    }
}

const mapStateToProps = (state) => {
    
    return {
        imageUrl: state.peoplePage.imageUrl,
        listPeople: state.peoplePage.listPeople,
        personUrl: state.peoplePage.personUrl, 
        peopleInfo: state.peoplePage.peopleInfo,
        imageUrl: state.peoplePage.imageUrl,
        idItem: state.peoplePage.idItem
    }
}

export default compose(
    connect(mapStateToProps, {setUrlimageProfile, requestListPeople, setUrlProfile, requestPeopleInfo, setStartId})
)(PeoplePageContainer)
