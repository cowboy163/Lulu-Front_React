import {CHECKBOX_STATUS, PAYMENT_METHOD, SHIPPING_INFO_POST} from "../helper";

const initState = {
    order: null,
    payment: null,
    checkBox: true,
    paymentMethod: "1"
}

const placeOrderReducers = (state = initState, action) => {
    const newState = {...state}
    switch (action.type) {
        case SHIPPING_INFO_POST:
            newState.order = action.order
            newState.payment = action.payment
            return newState

        case CHECKBOX_STATUS:
            newState.checkBox = action.payload
            return newState

        case PAYMENT_METHOD:
            newState.paymentMethod = action.payload
            return newState
        default:
            return newState
    }

}

export default placeOrderReducers