import * as t from './types'

const INITIAL_STATE = {
    products: [],
    totalItems: null,
    orderBy: 'OrderByScoreDESC',
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
    case t.PRODUCTS:
        return { ...state, products: payload }
    case t.TOTAL_ITEMS:
        return { ...state, totalItems: payload }
    case t.ORDER_BY:
        return { ...state, orderBy: payload }
    default:
        return state
    }
}