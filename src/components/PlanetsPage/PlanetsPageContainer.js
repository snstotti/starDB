import React, { Component } from 'react'
import '../peoplePage/peoplePage.css'
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
        const { requestItemInfo, setStartId, setUrlimageProfile, idItem } = this.props
        if (!idItem) {
            return <Spiner />
        }
        setStartId(idItem)
        setUrlimageProfile('planets', idItem)
        requestItemInfo('planets', idItem)
    }


    render() {
        const { selectedId, getDetails, getUrl, itemInfo, setUrlimageProfile, requestPeopleInfo, imageUrl, list, requestList, setStartId, onItemSelected, idItem, page, toggleNextPage, togglePrevPage } = this.props
        return (
            <div className='blockPage'>
                <ItemList
                    setStartId={setStartId}
                    idItem={idItem}
                    onItemSelected={onItemSelected}
                    selectedId={selectedId}
                    requestList={requestList}
                    list={list}
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
                    itemInfo={itemInfo}
                    imageUrl={imageUrl} />
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
