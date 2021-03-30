import { LANGUAGE, CURRENCY } from '../constants'

const format = (number) => {
    return new Intl.NumberFormat(LANGUAGE, {style: 'currency', currency: CURRENCY}).format(number)
}

export default format