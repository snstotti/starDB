import React from 'react'
import { Route } from "react-router-dom"
import PlanetsPageContainer from '../PlanetsPage/PlanetsPageContainer'
import PeoplePageContainer from '../peoplePage/PeoplePageContainer'
import StarshipsPageContainer from '../StarshipsPage/StarshipsPageContainer'



const CommonContainer =()=> {

        return (
            <div className='container '>
                <Route path='/people' >
                    <PeoplePageContainer />
                </Route>

                <Route path='/planets' >
                    <PlanetsPageContainer />
                </Route>

                <Route path='/starships' >
                    <StarshipsPageContainer />
                </Route>
            </div>
        )
    
}


export default CommonContainer
