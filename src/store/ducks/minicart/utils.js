import { SHIPPING_COST, FREE_SHIPPING_THRESHOLD } from '../../../constants/'

export const totalValue = (items) => {
    let total = 0
    items.forEach(item => {
        total += item.price * item.quantity
    })
    return total
}

export const totalItems = (items) => {
    return items ? items.reduce((acc, { quantity }) => acc + quantity, 0) : 0
}

export const totalShipping = (items) => {
    return items ? items.reduce((acc, { quantity }) => acc + (SHIPPING_COST * quantity), 0) : 0
}

export const isFreeShipping = (totalValue) => {
    return totalValue >= FREE_SHIPPING_THRESHOLD
}