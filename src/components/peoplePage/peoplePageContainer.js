import React, { Component } from 'react'
import './peoplePage.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PeoplePage from './peoplePage'
import { setUrlimageProfile, requestListPeople, requestPeopleInfo, setStartId, toggleNextPage, togglePrevPage } from '../redux/peoplePageReduce'

class PeoplePageContainer extends Component {

    onItemSelected = (id) => {
        this.props.setStartId(id)
    }

    render() {
        return (
            <PeoplePage {...this.props} onItemSelected={this.onItemSelected} />
        )
    }
}


const mapStateToProps = (state) => {

    return {
        imageUrl: state.peoplePage.imageUrl,
        listPeople: state.peoplePage.listPeople,
        peopleInfo: state.peoplePage.peopleInfo,
        idItem: state.peoplePage.idItem,
        page: state.peoplePage.page
    }
}

export default compose(
    connect(mapStateToProps, { setUrlimageProfile, requestListPeople, requestPeopleInfo, setStartId, toggleNextPage, togglePrevPage })
)(PeoplePageContainer)
