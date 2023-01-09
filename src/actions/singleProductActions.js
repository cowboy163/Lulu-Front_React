import axios from "axios";
import {CHANGE_COLOR, CHANGE_SIZE, FETCH_SINGLE_PRODUCT} from "../helper";
import {MAIN_URL, MY_KEY} from "../const";


const fetchSingleProduct = (product_id, color_id, size) => dispatch => {
    axios.get(`${MAIN_URL}/product/${product_id}?${MY_KEY}`)
        .then(res => {
            // console.log('single product data===>',res.data.rs)
            dispatch({
                type: FETCH_SINGLE_PRODUCT,
                payload: res.data.rs,
                current_color_id: color_id,
                current_size: size,
            })
        })
}

const changeColor = index => dispatch => {
    dispatch({
        type: CHANGE_COLOR,
        payload: index,
    })
}

const changeSize = index => dispatch => {
    dispatch({
        type: CHANGE_SIZE,
        payload: index,
    })
}


export {
    fetchSingleProduct,
    changeColor,
    changeSize,
}