import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {useEffect, useState} from "react";
import PaymentButtonOutside from "./PaymentButtonOutside";
import {useDispatch, useSelector} from "react-redux";
import {paymentSuccess} from "../../actions/paymentActions";
import {paymentMethod} from "../../actions/placeOrderActions";

const PaymentButtonInside = () => {
    const stripe = useStripe()
    const elements = useElements()
    const dispatch = useDispatch()

    const order = useSelector(state => state?.placeOrderReducers?.order)
    const payment = useSelector(state => state?.placeOrderReducers?.payment)
    const checkbox = useSelector(state => state?.placeOrderReducers?.checkBox)
    const paymentMethodSelected = useSelector(state => state?.placeOrderReducers?.paymentMethod)

    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!stripe) {
            return
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return
        }

        stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        })
    }, [stripe])


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        let result = undefined

        result = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
            // confirmParams: {
            //     return_url: () => {alert('aaa')}
        })
        // console.log('result check', result)

        const error = result?.paymentIntent?.last_payment_error?.message
        if (error) {
            alert(error)
            // console.log(error)
            return
        }

        // console.log('result check', result.paymentIntent.status)

        if(result.paymentIntent.status === 'succeeded') {
            dispatch(paymentSuccess(order, payment, checkbox, paymentMethodSelected))
        }
    }

    const paymentElementOptions = {
        layout: 'tabs',
    }

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit}>
                <div style={{display: 'none'}}>
                    <PaymentElement id="payment-element"
                                    options={paymentElementOptions}
                    />
                </div>
                <button style={{
                    width: "4rem",
                    height: "3rem",
                    cursor: "pointer",
                    opacity: "0"
                }}
                >strip submit
                </button>
            </form>
        </div>
    )
}

export default PaymentButtonInside