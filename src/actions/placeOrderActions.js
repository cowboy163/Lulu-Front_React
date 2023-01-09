import {CHECKBOX_STATUS, PAYMENT_METHOD, SHIPPING_INFO_POST} from "../helper";
import {TAX_RATE} from "../const";

const shippingInfoPost = (shippingInfo, userInfo, bagInfo, checkBox) => dispatch => {
    // console.log('shipping info check ===> ', shippingInfo)
    // console.log('userinfo check ===> ', userInfo)
    // console.log('bag info check ===> ', bagInfo)

    // ========== post data arrangement ==========
    let order = null
    let payment = null

    let price = 0
    // products format, Array: "productId | colorId | size | quantity"
    let products = []
    bagInfo.forEach(item => {
        products.push(item.productId + '|' + item.colorId + '|' + item.size + '|' + item.quantity)
        price += item.item_detail.num_price * item.quantity
    })

    if(!shippingInfo.address_2) {
        shippingInfo.address_2 = undefined
    }

    order = {
        products: products,
        user: userInfo.user.id,
        order_status: 2,
        tax_rate: TAX_RATE,
        price: price,
        total: price * TAX_RATE,
        first_name: shippingInfo.first_name,
        last_name: shippingInfo.last_name,
        address: shippingInfo.address,
        address_2: shippingInfo.address_2,
        city: shippingInfo.city,
        province: shippingInfo.province,
        country: shippingInfo.country,
        postcode: shippingInfo.postcode,
        phone: shippingInfo.phone
    }
    payment = {
        first_name: shippingInfo.bill_first_name,
        last_name: shippingInfo.bill_last_name,
        address: shippingInfo.bill_address,
        address_2: shippingInfo.bill_address_2,
        city: shippingInfo.bill_city,
        province: shippingInfo.bill_province,
        country: shippingInfo.bill_country,
        postcode: shippingInfo.bill_postcode,
        phone: shippingInfo.bill_phone
    }

    dispatch({
        type: SHIPPING_INFO_POST,
        order: order,
        payment: payment
    })

    // console.log('payment check ===> ', payment)


    // post order data
    // axios.post(ORDER_POST, order)
    //     .then(res => {
    //         console.log('response check ===> ', res)
    //     })


}

const checkBoxStatus = checkBox => dispatch => {
    dispatch({
        type: CHECKBOX_STATUS,
        payload: checkBox,
    })
}

const paymentMethod = method => dispatch => {
    dispatch({
        type: PAYMENT_METHOD,
        payload: method,
    })
}

export {
    shippingInfoPost,
    checkBoxStatus,
    paymentMethod,
}
