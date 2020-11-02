import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import peoplePageReduce from './peoplePageReduce';
import planetsPageReduce from './planetsPageReduce';
import starshipsPageReduce from './starshipsPageReduce';




const reducer = combineReducers({
    planetsPage: planetsPageReduce,
    peoplePage: peoplePageReduce,
    starshipsPage: starshipsPageReduce,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store