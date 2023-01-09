import {CHANGE_HEIGHT, FETCH_NAV_DATA, HIDE_MASK, HOVER_DATA, SHOW_MASK, UNHOVER_DATA} from "../helper";
import axios from "axios";


const fetchNavData = () => dispatch => {
    axios.get('/nav_data.json')
    // axios.get('/postman_collection.json')
        .then(res => {
            // console.log('raw-data=>', res.data)
            dispatch({
                type: FETCH_NAV_DATA,
                payload: res.data,
            })
        })
}
const hoverData = value => dispatch => {
    dispatch({
        type: HOVER_DATA,
        payload: value,
    })
}
const unhoverData = () => dispatch => {
    dispatch({
        type: UNHOVER_DATA,
    })
}
const showMask = maskData => dispatch => {
    dispatch({
        type: SHOW_MASK,
        payload: maskData,
    })
}
const hideMask = () => dispatch => {
    dispatch({
        type: HIDE_MASK,
    })
}
const changeHeight = height => dispatch => {
    dispatch({
        type: CHANGE_HEIGHT,
        payload: height,
    })
}
export {
    fetchNavData,
    hoverData,
    unhoverData,
    showMask,
    changeHeight,
    hideMask,
}