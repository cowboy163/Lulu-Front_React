import {CHANGE_COLOR, CHANGE_SIZE, FETCH_SINGLE_PRODUCT} from "../helper";


const initState = {
    single_product_data: null,
    current_colour: null,
    current_size: null,
}

const singleProductReducers=(state=initState,action)=>{
    const newState = {...state}
    switch(action.type) {
        case FETCH_SINGLE_PRODUCT:
            // transform the price to a number
            let price_num = action.payload.price
            price_num = price_num.replace(/[^\d]/g,'')
            price_num = Number(price_num)
            // record the number format price into data
            action.payload.price_num = price_num
            newState.single_product_data = action.payload
            // find the current colour
            action.payload.images.forEach((item,index) => {
                if(item.colorId === action.current_color_id) {
                    newState.current_colour = {...item}
                    newState.current_colour.index = index
                }
            })
            // find the current size
            if(action.current_size) {
                newState.current_size = {...newState.current_size, name: action.current_size}
                newState.single_product_data.sizes[0].details.forEach((item,index) => {
                    if(item === action.current_size) {
                        newState.current_size = {...newState.current_size, index:index}
                    }
                })
            } else {
                newState.current_size = null
            }
            return newState

        case CHANGE_COLOR:
            newState.current_colour = {...newState.single_product_data.images[action.payload]}
            newState.current_colour = {...newState.current_colour, index: action.payload}
            return newState

        case CHANGE_SIZE:
            newState.current_size = {...newState.current_size, name: newState?.single_product_data.sizes[0].details[action.payload]}
            newState.current_size = {...newState.current_size, index: action.payload}
            return newState

        default:
            return newState
    }
}

export default singleProductReducers