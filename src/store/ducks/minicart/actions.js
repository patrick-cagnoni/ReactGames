import { totalItems, totalValue, totalShipping, isFreeShipping } from './utils'
import * as t from './types'

export const openMinicart = () => (dispatch) => {
  dispatch({ type: t.OPEN })
}

export const closeMinicart = () => (dispatch) => {
  dispatch({ type: t.CLOSE })
}

const setTotalValue = (items) => ({
  type: t.TOTAL_VALUE,
  payload: totalValue(items),
})

const setTotalItems = (items) => ({
  type: t.TOTAL_ITEMS,
  payload: totalItems(items),
})

const setFreeShipping = (items) => ({
  type: t.FREE_SHIPPING,
  payload: isFreeShipping(totalValue(items)),
})

const setTotalShipping = (items) => ({
    type: t.TOTAL_SHIPPING,
    payload: totalShipping(items),
})

const updateCart = () => async (dispatch, getState) => {
  const state = await getState()
  const products = state.minicart.products
  dispatch(setTotalValue(products))
  dispatch(setTotalItems(products)) 
  dispatch(setTotalShipping(products))
  dispatch(setFreeShipping(products))
}

export const addProduct = (product) => (dispatch) => {
  const action = {
    type: t.ADD_PRODUCT,
    payload: product,
  }
  dispatch(action)
  dispatch(updateCart())
}

export const removeProduct = (productId) => (dispatch) => {
  const action = {
    type: t.REMOVE_PRODUCT,
    payload: productId,
  }
  dispatch(action)
  dispatch(updateCart())
}

export const incQuantity = (productId) => (dispatch) => {
  const action = {
    type: t.INC_QUANTITY,
    payload: productId,
  }
  dispatch(action)
  dispatch(updateCart())
}

export const decQuantity = (productId) => (dispatch) => {
  const action = {
    type: t.DEC_QUANTITY,
    payload: productId,
  }
  dispatch(action)
  dispatch(updateCart())
}




