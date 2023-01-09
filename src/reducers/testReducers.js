import {TEST} from "../helper";

const initState = {
    text:''
}

const testReducers = (state = initState, action) => {
    const newState = {...state}
    switch(action.type) {
        case TEST:
            console.log("test reducer === payload: ", action.payload)
            newState.text = action.payload
            return newState
        default:
            return state
    }
}

export default testReducers