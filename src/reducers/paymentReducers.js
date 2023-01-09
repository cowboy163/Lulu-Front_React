import {PAYMENT_RESET, PAYMENT_SUCCESS} from "../helper";


const initState = {
    payment_success: false,
}

const paymentReducers = (state=initState, action) => {
    const newState = {...state}
    switch(action.type) {
        case PAYMENT_SUCCESS:
            newState.payment_success = true
            return newState
        case PAYMENT_RESET:
            newState.payment_success = false
            return newState
        default:
            return state
    }
}

export default paymentReducers