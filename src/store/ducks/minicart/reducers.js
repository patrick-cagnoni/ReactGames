import * as t from './types'

const INITIAL_STATE = {
    isOpen: false,
    products: [],
    totalItems: 0,
    totalValue: 0,
    totalShipping: 0,
    isFreeShipping: false,
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case t.OPEN:
            return { ...state, isOpen: true }
        case t.CLOSE: 
            return { ...state, isOpen: false }
        case t.TOTAL_ITEMS:
            return { ...state, totalItems: payload }
        case t.TOTAL_VALUE:
            return { ...state, totalValue: payload }
        case t.PRODUCTS:
            return { ...state, products: payload }
        case t.ADD_PRODUCT:{
            const products = [...state.products]
            products.push(payload)
            return { ...state, products }
        }     
        case t.REMOVE_PRODUCT:{
            const productsState = [...state.products]
            const products = productsState.filter(p => p.id !== payload)
            return { ...state, products }
        }     
        case t.INC_QUANTITY:{
            const products = [...state.products]
            const product = products.find((p) => p.id === payload)
            if(!product) return state
            product.quantity ++
            const index = products.indexOf(product)
            products.splice(index, 1, product)
            return { ...state, products }
        }     
        case t.DEC_QUANTITY:{
            const products = [...state.products]
            const product = products.find((p) => p.id === payload)
            if(!product) return state
            if(product.quantity) product.quantity --
            const index = products.indexOf(product)
            products.splice(index, 1, product)
            return { ...state, products }
        }     
        case t.TOTAL_SHIPPING:
            return { ...state, totalShipping: payload }
        case t.FREE_SHIPPING:
            return { ...state, isFreeShipping: payload }
        default:
            return state
    }
}