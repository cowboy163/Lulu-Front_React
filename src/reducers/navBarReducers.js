import {CHANGE_HEIGHT, FETCH_NAV_DATA, HIDE_MASK, HOVER_DATA, SHOW_MASK, UNHOVER_DATA} from "../helper";

const initState = {
    navBarData:[],
    hoverData: null,
    height:0,
    showMask: false,
    maskData: {
        zIndex:'1',
        opacity:'0.3',
    },
}

const navBarReducers = (state=initState, action) => {
    const newState = {...state}
    switch(action.type) {
        case FETCH_NAV_DATA:
            if(action.payload.length > 0) {
                newState.navBarData = action.payload
            }
            return newState
        case HOVER_DATA:
            newState.hoverData = action.payload
            return newState
        case UNHOVER_DATA:
            newState.hoverData = null
            return newState
        case SHOW_MASK:
            newState.showMask = true
            if(action.payload) {
                newState.maskData = action.payload
            }
            return newState
        case HIDE_MASK:
            newState.showMask = false
            newState.maskData = {...initState.maskData}
            return newState
        case CHANGE_HEIGHT:
            newState.height = action.payload
            return newState
        default:
            return state
    }
}

export default navBarReducers