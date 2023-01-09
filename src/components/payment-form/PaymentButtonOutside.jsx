import {useEffect, useState} from "react";
import axios from "axios";
import {stripePromise} from "../../utils/stripe/stripe.utils";
import {Elements} from "@stripe/react-stripe-js";
import PaymentButtonInside from "./PaymentButtonInside";

const PaymentButtonOutside = () => {
    const [clientSecret, setClientSecret] = useState("")

    useEffect(() => {
        axios("http://localhost:3001/paymentIntent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: 10000
            })
        }).then(res => setClientSecret(res.data.client_secret))
    }, [])

    // useEffect(() => {
    //     console.log('client secret check', clientSecret)
    // }, [clientSecret])

    const appearance = {
        theme: 'stripe'
    }
    const options = {
        clientSecret,
        appearance,
    }

    return(
        <div className="stripePaymentButton">
            {
                clientSecret &&  <Elements stripe={stripePromise} options={options}>
                    <PaymentButtonInside/>
                </Elements>
            }

        </div>
    )
}

export default PaymentButtonOutside