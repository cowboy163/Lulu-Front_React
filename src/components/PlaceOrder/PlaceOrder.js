import './PlaceOrder.scss'
import PlaceOrderStepper from "./PlaceOrderStepper/PlaceOrderStepper";

const PlaceOrder = () => {

    return (
        <div className='placeOrderMain'>
            <div className="container">
                <PlaceOrderStepper/>
            </div>
        </div>
    )
}

export default PlaceOrder