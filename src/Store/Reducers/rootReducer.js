import authReducer from './authReducer'
import loginSquareReducer from './loginSquareReducer'
import {combineReducers} from 'redux'

const rootReducer=combineReducers({
    auth : authReducer,
    loginSquare : loginSquareReducer
})

export default rootReducer