import {
    ADD_TO_BAG,
    CHANGE_COLOR_IN_BAG,
    CHANGE_QUANTITY,
    CHANGE_SIZE_IN_BAG,
    CLEAN_BAG, EDIT_ITEM,
    GET_BAG,
    REMOVE_FROM_BAG
} from "../helper";
import bag from "../components/NavBar/MiddleNav/Bag/Bag";

const initState = {
    bag: [],
    subtotal: 0,
    quantity_total: 0,
}

const localStore = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item))
}

const bagReducers = (state=initState, action) => {
    const newState = {...state}

    const calculateSubAndQuantityTotal = () => {
        newState.subtotal = 0
        newState.quantity_total = 0
        newState.bag.forEach(item => {
            newState.subtotal += (item.item_detail.num_price * item.quantity)
            newState.quantity_total += Number(item.quantity)
        })
    }

    switch(action.type) {
        case ADD_TO_BAG:
            let added = false
            let newBag = newState.bag.map(item => {
                if(item.productId === action.payload.productId &&
                    item.colorId === action.payload.colorId &&
                    item.size === action.payload.size
                ) {
                    added = true
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return {...item}
                }
            })
            // add a number type price into bag_detail
            let newItem = action.payload
            let price = action?.detail_obj?.price
            price = price.match(/\d+/g)[0]
            price = Number(price)
            action.detail_obj.num_price = price
            // combine bag & bag_detail
            newItem = {...newItem, item_detail: action.detail_obj}
            if(!added) {
                newBag.push(newItem)
            }
            newState.bag = newBag

            calculateSubAndQuantityTotal()

            localStore('bag', newState.bag)

            return newState
        case GET_BAG:
            // console.log('get bag reducer act===>')
            let local_bag = JSON.parse(localStorage.getItem('bag'))
            if(local_bag) {
                newState.bag = local_bag
            }

            calculateSubAndQuantityTotal()

            return newState
        case REMOVE_FROM_BAG:
            let bagNew = [...newState.bag]
            bagNew.splice(action.payload,1)
            newState.bag = bagNew

            localStore('bag', newState.bag)

            calculateSubAndQuantityTotal()

            return newState
        case CHANGE_QUANTITY:
            if(newState.bag){
                newState.bag = [...newState.bag.map((item,index)=>index===action.index? {...item, quantity: action.payload}:{...item})]
            }

            localStore('bag', newState.bag)

            calculateSubAndQuantityTotal()

            // console.log('reducer quantity total check===>',newState.quantity_total)
            return newState
        case CHANGE_COLOR_IN_BAG:
            newState.bag = newState.bag.map(item => item.productId === action.singleProductData.productId?
                {...item, colorId: action.payload.colorId, item_detail: {...item.item_detail, color: action.payload.colorAlt, pic: action.singleProductData.images[action.payload.index].mainCarousel.media.split('|')[0]}}
                :
                {...item}
            )
            return newState
        case CHANGE_SIZE_IN_BAG:

            newState.bag = newState.bag.map(item => item.productId === action.singleProductData.productId?
                {...item, size: action.payload.name}
                :
                {...item}
            )
            return newState

        case EDIT_ITEM:
            let itemProductId = action.singleProductData.productId
            let itemColorId = action.currentColor.colorId
            let itemSize = action.currentSize.name
            let bagIndex = action.bagIndex
            let changedFlag = false

            // quantity change situation
            newState.bag = newState.bag.map((item, index) => {
                if(itemProductId === item.productId && itemColorId === item.colorId && itemSize === item.size && index !== bagIndex) {
                    let quantity = Number(item.quantity)
                    let selectedQuantity = Number(newState.bag[bagIndex].quantity)
                    changedFlag = true
                    return {...item, quantity: quantity + selectedQuantity}
                } else {
                    return {...item}
                }
            })

            // edit item
            if(changedFlag) {
                newState.bag.splice(bagIndex, 1)
            } else {
                newState.bag = newState.bag.map((item, index) => index === bagIndex?
                    {...item, colorId: itemColorId, size: itemSize,
                        item_detail: {...item.item_detail,
                            color: action.currentColor.colorAlt,
                            pic: action.currentColor.mainCarousel.media.split('|')[0].trim()}}
                    :
                    {...item}
                )
            }

            calculateSubAndQuantityTotal()

            localStore('bag', newState.bag)

            return newState
        case CLEAN_BAG:
            newState.bag = []
            localStorage.removeItem('bag')
            newState.subtotal = 0
            newState.quantity_total = 0
            return newState
        default:
            return state
    }
}

export default bagReducers


