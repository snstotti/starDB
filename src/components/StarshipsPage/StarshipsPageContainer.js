import React from 'react'
import { setStartIdStarships, togglePageStarships, requestStarshipsInfo, getUrlimageStarships, requestListStarships } from '../redux/starshipsPageReduce'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PersonDetails from '../СommonСontainer/PageContainer/PersonDetails/person-details'
import ItemList from '../СommonСontainer/PageContainer/ItemList/item-list'
import PageContainer from '../СommonСontainer/PageContainer/PageContainer'
import RenderItem from '../СommonСontainer/PageContainer/ItemList/RenderItem/renderItem'




const StarshipsPageContainer = (props) => {

    return (
        <PageContainer
            getUrlimage={props.getUrlimageStarships}
            requestInfo={props.requestStarshipsInfo}
            idItem={props.idItemStarships}
            setStartId={props.setStartIdStarships} >
            <ItemList
                list={props.listStarships}
                page={props.pageStarships}
                togglePage={props.togglePageStarships}
                requestList={props.requestListStarships}>
                <RenderItem
                    list={props.listStarships}
                    setStartId={props.setStartIdStarships}
                    idItem={props.idItemStarships}
                    way={'starships'} />
            </ItemList>
            <PersonDetails
                imageUrl={props.imageUrlStarships}
                info={props.starshipsInfo}
                way={'starships'} />
        </PageContainer>

    )

}

const mapStateToProps = (state) => {
    return {
        idItemStarships: state.starshipsPage.idItemStarships,
        imageUrlStarships: state.starshipsPage.imageUrlStarships,
        starshipsInfo: state.starshipsPage.starshipsInfo,
        listStarships: state.starshipsPage.listStarships,
        pageStarships: state.starshipsPage.pageStarships,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setStartIdStarships, togglePageStarships, requestStarshipsInfo, getUrlimageStarships, requestListStarships,
        })
)(StarshipsPageContainer)
