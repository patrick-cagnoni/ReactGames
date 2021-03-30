import * as t from './types'
import { sortArray } from './utils'

export const setProducts = (products) => (dispach, getState) =>{
  const orderBy = getState().products.orderBy
  const sortedProducts = sortArray(products, orderBy)
  const action = {type: t.PRODUCTS, payload: sortedProducts}

  dispach(action)
}

export const setOrderBy = (orderBy) => (dispatch, getState) => {
  const products = getState().products.products
  const sortedProducts = sortArray(products, orderBy)
  const action = {type: t.ORDER_BY, payload: orderBy}

  dispatch(action)
  dispatch(setProducts(sortedProducts))
}
