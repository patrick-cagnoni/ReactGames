import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from './ducks'

const middlewares = [
    thunk,
]

const store = createStore(rootReducers, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    ))

export default store