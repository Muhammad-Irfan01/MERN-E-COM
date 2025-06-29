import {combineReducers} from 'redux'
import dataReducer from './Reducer'


export const rootReducer = combineReducers({
    firstReducer : dataReducer
})