import React from 'react'
import { getUrlimagePlanet, setStartIdPlanets, requestPlanetInfo, requestListPlanets, togglePagePlanet } from '../redux/planetsPageReduce'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PersonDetails from '../СommonСontainer/PageContainer/PersonDetails/person-details'
import ItemList from '../СommonСontainer/PageContainer/ItemList/item-list'
import PageContainer from '../СommonСontainer/PageContainer/PageContainer'
import RenderItem from '../СommonСontainer/PageContainer/ItemList/RenderItem/renderItem'



const PlanetsPageContainer = (props) => {

    const { setStartIdPlanets, imageUrlPlanet, planetInfo, listPlanets, requestListPlanets, requestPlanetInfo,
        getUrlimagePlanet, pagePlanets, idItemPlanets } = props

    return (
        <PageContainer
            getUrlimage={getUrlimagePlanet}
            requestInfo={requestPlanetInfo}
            idItem={idItemPlanets}
            setStartId={setStartIdPlanets} >

            <ItemList
                list={listPlanets}
                page={pagePlanets}
                togglePage={props.togglePagePlanet}
                requestList={requestListPlanets}>
                <RenderItem
                    list={listPlanets}
                    setStartId={setStartIdPlanets}
                    idItem={idItemPlanets} />
            </ItemList>

            <PersonDetails
                imageUrl={imageUrlPlanet}
                info={planetInfo}
                way={'planet'} />

        </PageContainer>



    )
}
const mapStateToProps = (state) => {

    return {
        idItemPlanets: state.planetsPage.idItemPlanets,
        imageUrlPlanet: state.planetsPage.imageUrlPlanet,
        planetInfo: state.planetsPage.planetInfo,
        listPlanets: state.planetsPage.listPlanets,
        pagePlanets: state.planetsPage.pagePlanets,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            setStartIdPlanets, getUrlimagePlanet, requestPlanetInfo, requestListPlanets, togglePagePlanet
        })
)(PlanetsPageContainer)
