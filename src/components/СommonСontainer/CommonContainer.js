import React, { Component } from 'react'
import { setStartId, togglePrevPage, toggleNextPage } from '../redux/generalReduce'
import { getUrlimagePeople, requestPeopleInfo, requestListPeople,togglePagePeople } from '../redux/peoplePageReduce'
import { getUrlimagePlanet, requestPlanetInfo, requestListPlanets,togglePagePlanet } from '../redux/planetsPageReduce'
import { Route } from "react-router-dom"
import PageContainer from './PageContainer/PageContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PeoplePageContainer from '../peoplePage/PeoplePageContainer'
import PlanetsPageContainer from '../PlanetsPage/PlanetsPageContainer'



class CommonContainer extends Component {

    render() {
        const {getUrlimagePeople, requestPeopleInfo,listPeople,peopleInfo,requestListPeople,imageUrlPeople,imageUrlPlanet,placeholderImageUrl,planetInfo,listPlanets,requestListPlanets,requestPlanetInfo,
            getUrlimagePlanet,pagePlanets,pagePeople,togglePagePlanet, togglePagePeople} = this.props
            
        return (
            <div className='container-md '>
               
                
                    <Route path='/people' >
                        <PeoplePageContainer 
                            way={'people'}
                            togglePagePeople={togglePagePeople}
                            getImage={getUrlimagePeople} 
                            requestInfo={requestPeopleInfo}
                            requestList={requestListPeople}
                            placeholderImageUrl={placeholderImageUrl}
                            list={listPeople}
                            info={peopleInfo}
                            imageUrl={imageUrlPeople}
                            pagePeople={pagePeople}
                            {...this.props} 

                            />
                    </Route>
                    <Route path='/planets' >
                        <PlanetsPageContainer
                        way={'planet'}
                        togglePagePlanet={togglePagePlanet}
                        getImage={getUrlimagePlanet} 
                        requestInfo={requestPlanetInfo}
                        requestList={requestListPlanets}
                        placeholderImageUrl={placeholderImageUrl}
                        list={listPlanets}
                        info={planetInfo}
                        imageUrl={imageUrlPlanet}
                        pagePlanets={pagePlanets}
                        {...this.props} 
                        />
                    </Route>
                

            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        idItem: state.general.idItem,
        placeholderImageUrl: state.general.placeholderImageUrl,

        imageUrlPeople: state.peoplePage.imageUrlPeople,
        listPeople: state.peoplePage.listPeople,
        peopleInfo: state.peoplePage.peopleInfo,
        pagePeople: state.peoplePage.pagePeople,

        imageUrlPlanet: state.planetsPage.imageUrlPlanet,
        planetInfo: state.planetsPage.planetInfo,
        listPlanets: state.planetsPage.listPlanets,
        pagePlanets: state.planetsPage.pagePlanets,
    }
}

export default compose(
    connect(mapStateToProps,
         { setStartId, getUrlimagePeople, requestPeopleInfo, requestListPeople,
            getUrlimagePlanet,requestPlanetInfo, requestListPlanets, togglePagePlanet,togglePagePeople })
)(CommonContainer)
