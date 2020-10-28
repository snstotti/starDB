import React, { Component } from 'react'

import { getUrlimagePeople, setStartIdPeople, requestPeopleInfo, requestListPeople, togglePagePeople } from '../redux/peoplePageReduce'
import { setStartIdStarships,togglePageStarships,requestStarshipsInfo,getUrlimageStarships,requestListStarships } from '../redux/starshipsPageReduce'
import { Route } from "react-router-dom"
import { compose } from 'redux'
import { connect } from 'react-redux'
import PersonDetails from '../person-details/person-details'
import ItemList from '../item-list/item-list'

import PageContainer from '../СommonСontainer/PageContainer/PageContainer'
import RenderItem from '../item-list/renderItem'
import PlanetsPageContainer from '../PlanetsPage/PlanetsPageContainer'



class CommonContainer extends Component {

    render() {
        const { setStartIdPeople,  getUrlimagePeople, requestPeopleInfo, listPeople, peopleInfo, requestListPeople, imageUrlPeople,      
              pagePeople, idItemPeople,  } = this.props

        return (
            <div className='container-md '>
                <Route path='/people' >
                    <PageContainer
                        getUrlimage={getUrlimagePeople}
                        requestInfo={requestPeopleInfo}
                        idItem={idItemPeople}
                        setStartId={setStartIdPeople}
                        >
                        <ItemList
                            list={listPeople}
                            page={pagePeople}
                            togglePage={this.props.togglePagePeople}
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
                </Route>

                <Route path='/planets' >
                    <PlanetsPageContainer />
                </Route>

                <Route path='/starships' >
                    <PageContainer
                        getUrlimage={this.props.getUrlimageStarships}
                        requestInfo={this.props.requestStarshipsInfo}
                        idItem={this.props.idItemStarships}
                        setStartId={this.props.setStartIdStarships} >
                        <ItemList
                            list={this.props.listStarships}
                            page={this.props.pageStarships}
                            togglePage={this.props.togglePageStarships}
                            requestList={this.props.requestListStarships}>
                                <RenderItem
                                    list={this.props.listStarships}
                                    setStartId={this.props.setStartIdStarships}
                                    idItem={this.props.idItemStarships}
                                    way={'starships'} />
                        </ItemList>
                        <PersonDetails
                            imageUrl={this.props.imageUrlStarships}
                            info={this.props.starshipsInfo}
                            way={'starships'} />
                    </PageContainer>

                </Route>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
       
        idItemPeople: state.peoplePage.idItemPeople,
        imageUrlPeople: state.peoplePage.imageUrlPeople,
        listPeople: state.peoplePage.listPeople,
        peopleInfo: state.peoplePage.peopleInfo,
        pagePeople: state.peoplePage.pagePeople,

       

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
            setStartIdPeople,  getUrlimagePeople, requestPeopleInfo, requestListPeople,
                togglePagePeople,
            setStartIdStarships,togglePageStarships,requestStarshipsInfo,getUrlimageStarships,requestListStarships, 
        })
)(CommonContainer)
