import {CHANGE_CAN_PAY_STATUS, LOGIN_CHECK, RECORD_LOGIN, USER_LOGOUT} from "../helper";


const recordLogin = data => dispatch => {
    dispatch({
        type: RECORD_LOGIN,
        payload: data,
    })
}

const loginCheck = () => dispatch => {
    dispatch({
        type:LOGIN_CHECK,
    })
}

const userLogout = () => dispatch => {
    dispatch({
        type: USER_LOGOUT,
    })
}

const changeCanPayStatus = boolean => dispatch => {
    dispatch({
        type: CHANGE_CAN_PAY_STATUS,
        payload: boolean,
    })
}

export {
    recordLogin,
    loginCheck,
    userLogout,
    changeCanPayStatus
}