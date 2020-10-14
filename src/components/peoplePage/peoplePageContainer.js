import React, { Component } from 'react'
import './peoplePage.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setStartId, setUrlimageProfile, requestList, requestItemInfo, toggleNextPage, togglePrevPage } from '../redux/generalReduce'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import Spiner from '../spiner/spiner'

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
        const { requestItemInfo, setStartId, setUrlimageProfile, idItem, name, image } = this.props
        if (!idItem) {
            return <Spiner />
        }
        setStartId(idItem)
        setUrlimageProfile(image, idItem)
        requestItemInfo(name, idItem)
    }


    render() {
       
        return (
            <div className='blockPage'>
                <ItemList {...this.props} />
                <PersonDetails {...this.props} />
            </div>


        )
    }
}


const mapStateToProps = (state) => {

    return {
        imageUrl: state.general.imageUrl,
        list: state.general.list,
        itemInfo: state.general.itemInfo,
        idItem: state.general.idItem,
        page: state.general.page
    }
}

export default compose(
    connect(mapStateToProps, { setUrlimageProfile, requestList, requestItemInfo, setStartId, toggleNextPage, togglePrevPage })
)(PeoplePageContainer)
