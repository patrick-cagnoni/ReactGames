import SortArray from 'sort-array'

export const sortArray = (array, orderBy) => {
    switch(orderBy) {
        case 'OrderByNameASC': {
            return SortArray(array, {by: 'name', order: 'asc'})
        }
        case 'OrderByNameDESC': {
            return SortArray(array, {by: 'name', order: 'desc'})
        }
        case 'OrderByPriceASC': {
            return SortArray(array, {by: 'price', order: 'asc'})
        }
        case 'OrderByPriceDESC': {
            return SortArray(array, {by: 'price', order: 'desc'})
        }
        case 'OrderByScoreASC': {
            return SortArray(array, {by: 'score', order: 'asc'})
        }
        case 'OrderByScoreDESC': {
            return SortArray(array, {by: 'score', order: 'desc'})
        }
        default: return array
    }
}