import axios from "axios";
import {LOGIN_URL} from "../const";

const localStore = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}

const emailValidation = email => {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if(email === '') {
        return 'Please enter an email address'
    } else if (!reg.test(email)) {
        return 'Email address is not in the correct format (xxx@yyy.zzz). Please correct the email address'
    } else {
        return 'true'
    }
}

const passwordValidation = password => {
    if(password === '') {
        return  'Please enter your password'
    } else {
        return 'true'
    }
}

const accountLogin =(email, password, dispatch) => {
    let obj = {
        email: email,
        password: password,
    }
    return axios.post(LOGIN_URL, obj)
}
export {
    localStore,
    emailValidation,
    passwordValidation,
    accountLogin,
}