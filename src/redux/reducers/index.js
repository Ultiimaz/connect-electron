import { combineReducers } from 'redux'
import general from "./general";

import { connectRouter } from 'connected-react-router'

const rootReducer = (history) =>  combineReducers({
  general: general
})

export default rootReducer;
