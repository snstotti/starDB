import React from 'react'
import { getUrlimagePeople, setStartIdPeople, requestPeopleInfo, requestListPeople, togglePagePeople } from '../redux/peoplePageReduce'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PersonDetails from '../СommonСontainer/PageContainer/PersonDetails/person-details'
import ItemList from '../СommonСontainer/PageContainer/ItemList/item-list'
import PageContainer from '../СommonСontainer/PageContainer/PageContainer'
import RenderItem from '../СommonСontainer/PageContainer/ItemList/RenderItem/renderItem'

const PeoplePageContainer = ({ setStartIdPeople, getUrlimagePeople, requestPeopleInfo, listPeople, peopleInfo, requestListPeople, imageUrlPeople, pagePeople, idItemPeople, togglePagePeople}) => {
   
    return (

        <PageContainer
            getUrlimage={getUrlimagePeople}
            requestInfo={requestPeopleInfo}
            idItem={idItemPeople}
            setStartId={setStartIdPeople}>
            <ItemList
                list={listPeople}
                page={pagePeople}
                togglePage={togglePagePeople}
                requestList={requestListPeople}>
                <RenderItem
                    list={listPeople}
                    setStartId={setStartIdPeople}
                    idItem={idItemPeople} />
            </ItemList>
            <PersonDetails
                imageUrl={imageUrlPeople}
                info={peopleInfo}
                way={'people'} />
        </PageContainer>
    )

}
const mapStateToProps = (state) => {
    return {
        idItemPeople: state.peoplePage.idItemPeople,
        imageUrlPeople: state.peoplePage.imageUrlPeople,
        listPeople: state.peoplePage.listPeople,
        peopleInfo: state.peoplePage.peopleInfo,
        pagePeople: state.peoplePage.pagePeople,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setStartIdPeople, getUrlimagePeople, requestPeopleInfo, requestListPeople,
            togglePagePeople,

        })
)(PeoplePageContainer)
