import {CHANGE_SEARCH_INPUT, FETCH_SEARCH_DATA, HIDE_SEARCH_DETAIL, SHOW_SEARCH_DETAIL} from "../helper";


const showSearchDetail = () => dispatch => {
    dispatch ({
        type: SHOW_SEARCH_DETAIL,
    })
}
const hideSearchDetail = () => dispatch => {
    dispatch ({
        type: HIDE_SEARCH_DETAIL,
    })
}
const changeSearchInput = inputValue => dispatch => {
    dispatch({
        type: CHANGE_SEARCH_INPUT,
        payload: inputValue,
    })
}
const fetchSearchData = inputValue => dispatch => {
    // fetch data
    const data = undefined
    dispatch({
        type: FETCH_SEARCH_DATA,
        payload: data,
        inputValue: inputValue,
    })
}
export {
    showSearchDetail,
    changeSearchInput,
    hideSearchDetail,
    fetchSearchData,
}

