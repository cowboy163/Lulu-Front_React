import {
    ADD_TO_BAG,
    CHANGE_COLOR_IN_BAG,
    CHANGE_QUANTITY,
    CHANGE_SIZE_IN_BAG,
    CLEAN_BAG, EDIT_ITEM,
    GET_BAG,
    REMOVE_FROM_BAG
} from "../helper";


const addToBag = (obj, detail_obj) => dispatch => {
    dispatch({
        type: ADD_TO_BAG,
        payload: obj,
        detail_obj: detail_obj,
    })
}

const getBag = () => dispatch => {
    dispatch({
        type: GET_BAG,
    })
}

const removeFromBag = index => dispatch =>{
    dispatch({
        type: REMOVE_FROM_BAG,
        payload: index,
    })
}

const changeQuantity = (value,index) => dispatch => {
    dispatch({
        type: CHANGE_QUANTITY,
        payload: value,
        index: index,
    })
}

const cleanBag = () => dispatch => {
    dispatch({
        type: CLEAN_BAG,
    })
}

const changeColorInBag = (currentColor, singleProductData) => dispatch => {
    dispatch({
        type: CHANGE_COLOR_IN_BAG,
        payload: currentColor,
        singleProductData: singleProductData,
    })
}

const changeSizeInBag = (currentSize, singleProductData) => dispatch => {
    dispatch({
        type: CHANGE_SIZE_IN_BAG,
        payload: currentSize,
        singleProductData: singleProductData,
    })
}

const editItem = (singleProductData, currentColor, currentSize, bagIndex) => dispatch => {
    dispatch({
        type: EDIT_ITEM,
        singleProductData,
        currentColor,
        currentSize,
        bagIndex,
    })
}

export {
    addToBag,
    getBag,
    removeFromBag,
    changeQuantity,
    cleanBag,
    changeColorInBag,
    changeSizeInBag,
    editItem,
}