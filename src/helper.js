// ============ SideBar ===================
// import {updateDummyBackend} from "./actions/reviewAction";


import {MAIN_URL, MY_KEY} from "./const";

const filterAPI = `${MAIN_URL}/product/filter?${MY_KEY}`;


const sideBarActionType={
    FETCH_ALL_FILTERS:'FETCH_ALL_FILTERS',
   //8 Checkbox filters
    SELECTED_FILTERS:'SELECTED_FILTERS',
    // color filter
    SELECTED_COLOR:'SELECTED_COLOR',
    //first 5 items of filter or all
    FOLD_FILTER:'FOLD_FILTER',
    //render checkbox checked or not
    SHOW_FILTER:'SHOW_FILTER',

}
// ==============REVIEW====================

const reviewAPI=`${MAIN_URL}/product/prod10550089?${MY_KEY}`
const reviewActionType={
    FETCH_REVIEW_ALL :'FETCH_REVIEW_ALL',
    REVIEW_SELECTED_FILTERS:'REVIEW_SELECTED_FILTERS',
    ADD_REVIEW_TO_BACKEND:'ADD_REVIEW_TO_BACKEND',
    UPDATE_DUMMY_BACKEND:'UPDATE_DUMMY_BACKEND',
    REVIEW_IMG_FILTERS:'REVIEW_Img_FILTERS',
}



const CHANGE_FILTER = 'CHANGE_FILTER'
// ==============NavBar====================
const TEST = 'TEST'
const FETCH_NAV_DATA = "FETCH_NAV_DATA"
const HOVER_DATA = "HOVER_DATA"
const UNHOVER_DATA = "UNHOVER_DATA"
const SHOW_MASK = 'SHOW_MASK'
const HIDE_MASK = 'HIDE_MASK'
const CHANGE_HEIGHT = 'CHANGE_HEIGHT'
const SHOW_SEARCH_DETAIL = 'SHOW_SEARCH_DETAIL'
const HIDE_SEARCH_DETAIL = 'HIDE_SEARCH_DETAIL'
const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'
const FETCH_SEARCH_DATA = "FETCH_SEARCH_DATA"
const SELECTED_IMAGE = 'selectedImage'
const FETCH_PRODUCT = 'fetchCityReal'
const LOADING = 'loading'

// =================Single Product Page===================
const FETCH_SINGLE_PRODUCT = 'FETCH_SINGLE_PRODUCT'
const CHANGE_COLOR = 'CHANGE_COLOR'
const CHANGE_SIZE = 'CHANGE_SIZE'


// ===================== bag ==========================
const ADD_TO_BAG = 'ADD_TO_BAG'
const GET_BAG = 'GET_BAG'
const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
const CLEAN_BAG = 'CLEAN_BAG'
const CHANGE_COLOR_IN_BAG = 'CHANGE_COLOR_IN_BAG'
const CHANGE_SIZE_IN_BAG = 'CHANGE_SIZE_IN_BAG'
const EDIT_ITEM = 'EDIT_ITEM'

// ====================== checkout ===============================
const RECORD_LOGIN = 'RECORD_LOGIN'
const LOGIN_CHECK = 'LOGIN_CHECK'
const USER_LOGOUT = 'USER_LOGOUT'
const ERROR_PAGE = 'ERROR_PAGE'
const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS'
const PAYMENT_RESET = 'PAYMENT_RESET'
const CHANGE_CAN_PAY_STATUS = 'CHANGE_CAN_PAY_STATUS'

// ====================== place order ===============================
const SHIPPING_INFO_POST = "SHIPPING_INFO_POST"
const CHECKBOX_STATUS = "CHECKBOX_STATUS"
const PAYMENT_METHOD = "PAYMENT_METHOD"

export {
    TEST, filterAPI, sideBarActionType,
    FETCH_NAV_DATA,
    HOVER_DATA,
    UNHOVER_DATA,
    SHOW_MASK,
    CHANGE_HEIGHT,
    HIDE_MASK,
    SHOW_SEARCH_DETAIL,
    HIDE_SEARCH_DETAIL,
    CHANGE_SEARCH_INPUT,
    FETCH_SEARCH_DATA,
    SELECTED_IMAGE,
    FETCH_PRODUCT,
    LOADING,
    CHANGE_FILTER,
    reviewActionType,
    reviewAPI,
    FETCH_SINGLE_PRODUCT,
    ADD_TO_BAG,
    GET_BAG,
    REMOVE_FROM_BAG,
    CHANGE_QUANTITY,
    RECORD_LOGIN,
    LOGIN_CHECK,
    USER_LOGOUT,
    ERROR_PAGE,
    PAYMENT_SUCCESS,
    CLEAN_BAG,
    PAYMENT_RESET,
    CHANGE_COLOR,
    CHANGE_SIZE,
    CHANGE_COLOR_IN_BAG,
    CHANGE_SIZE_IN_BAG,
    EDIT_ITEM,
    CHANGE_CAN_PAY_STATUS,
    SHIPPING_INFO_POST,
    CHECKBOX_STATUS,
    PAYMENT_METHOD,
}