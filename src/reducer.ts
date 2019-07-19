import {combineReducers} from "redux"
import {router5Reducer} from "redux-router5"
import {AppState} from "./state"
import {entityReducer} from "./entities/reducer"


const rootReducer = combineReducers<AppState>({
    router: router5Reducer,
    entity: entityReducer
})

export default rootReducer
