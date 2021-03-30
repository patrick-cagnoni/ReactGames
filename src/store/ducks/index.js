import { combineReducers } from 'redux'

import minicart from './minicart'
import products from './products'

export default combineReducers({
    minicart,
    products,
})