import {CHANGE_CAN_PAY_STATUS, LOGIN_CHECK, RECORD_LOGIN, USER_LOGOUT} from "../helper";
import {localStore} from "../js/utils";

const initState = {
    user_data: null,
}

const checkoutReducers = (state=initState,action) => {
    const newState = {...state}
    switch(action.type) {
        case RECORD_LOGIN:
            newState.user_data = action.payload
            // login status expire after 1 hour
            let now = Date.now()
            let expireTime = now + 3600 * 1000

            newState.user_data = {...newState.user_data, expireTime: expireTime}
            newState.user_data = {...newState.user_data, login_status: true}
            let canPayStatus = JSON.parse(localStorage.getItem('user_data'))?.canPayStatus
            // newState.user_data = {...newState.user_data, canPayStatus: canPayStatus}

            // delete password for safe
            delete newState.user_data.user.password

            localStore('user_data', newState.user_data)

            return newState

        case LOGIN_CHECK:
            let obj = JSON.parse(localStorage.getItem('user_data'))
            if(obj) {
                newState.user_data = obj
                newState.user_data.login_status = newState.user_data.login_status? Date.now() < newState.user_data.expireTime : false
            }
            return newState

        case USER_LOGOUT:
            newState.user_data = {...newState.user_data, login_status: false}

            localStore('user_data', newState.user_data)

            return newState

        case CHANGE_CAN_PAY_STATUS:
            newState.user_data = {...newState.user_data, canPayStatus: action.payload}

            localStore('user_data', newState.user_data)

            return newState
        default:
            return state
    }
}

export default checkoutReducers