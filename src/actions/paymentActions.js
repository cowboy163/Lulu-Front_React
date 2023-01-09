import {PAYMENT_RESET, PAYMENT_SUCCESS} from "../helper";
import axios from "axios";
import {ORDER_POST, PAYMENT_POST} from "../const";


const paymentSuccess = (order, payment, checkbox, paymentMethod) => dispatch => {
    console.log('order', order)
    console.log('checkbox', checkbox)
    console.log('payment method', paymentMethod)

    // finish payment data
    if(checkbox) {
        for(let item in payment) {
            payment = {...payment, [item]: order[item]}
        }
    }
    payment = {...payment, payment_type: Number(paymentMethod)}

    if(!payment.address_2) {
        payment = {...payment, address_2: "NULL"}
        delete payment.address_2
    }
    console.log('payment check', payment)

    axios.post(ORDER_POST, order)
        .then(res => {
            console.log('order response check ===>',res.data)

            // payment data
            payment = {...payment, payment_status: 2}
            payment = {...payment, payment_amount: res?.data?.data?.total}
            payment = {...payment, order: res?.data?.data?.order_id}

            axios.post(PAYMENT_POST, payment)
                .then(res => {
                    console.log('payment response check ===>', res.data)
                    dispatch({
                        type: PAYMENT_SUCCESS,
                    })
                }).catch(e => {
                console.log('payment error', e)
            })

        })
        .catch(e => {
            console.log('order error', e)
    })

}

const paymentReset = () => dispatch => {
    dispatch({
        type: PAYMENT_RESET,
    })
}

export {
    paymentSuccess,
    paymentReset,
}
