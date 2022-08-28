import {createStore, applyMiddleware} from "redux";
import reducers from './rootReducer'
import {loggerMiddleware} from './loggerMiddleware'

const store = createStore(reducers, applyMiddleware(loggerMiddleware))
export default store