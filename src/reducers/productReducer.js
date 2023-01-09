import {FETCH_PRODUCT, LOADING, SELECTED_IMAGE} from "../helper";

const initState = {
    imageLibrary: [],
    selectedImage: 0,
    isLoading: true
}

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            // console.log("reducer:  ", action.payload)
            return {...state, imageLibrary: action?.payload}
        case SELECTED_IMAGE:
            return {...state, selectedImage: action?.payload}
        case LOADING:
            return {...state, isLoading: action?.payload}
        default:
            return state
    }
}