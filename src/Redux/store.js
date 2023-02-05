import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { AppReducer } from "./ProductData/reducer"
import { AuthReducer } from "./AuthData/reducer"
const devtools=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

const rootReducer=combineReducers({AppReducer,AuthReducer})
const store=legacy_createStore(rootReducer,devtools(applyMiddleware(thunk)))
export default store