import './OrderSummary.scss'
import {useSelector} from "react-redux";
import {useState} from "react";
import BagItems from "./BagItems/BagItems";

const OrderSummary = () => {
    // get the items in the bag
    const subtotal = useSelector(state => state?.bagReducers.subtotal)
    const quantityTotal = useSelector(state => state?.bagReducers.quantity_total)

    // orderSummary__toggle status
    const [toggle, setToggle] = useState(true)

    return(
        <div className={'checkout__orderSummary'}>
            <h1 className="orderSummary__title">Order summary</h1>

            <div className="orderSummary__toggle"
                 onClick={() => {setToggle(state => !state)}}
            >
                <div className="itemCount">
                    <img src="/images/cart.svg" alt="" className={'cartIcon'}/>
                    <span>{quantityTotal} items</span>
                    <img src="/images/arrow_down.svg" alt="" className="toggleIcon"
                         style={{transform: toggle? 'rotateX(180deg)' : 'rotateX(0)'}}
                    />
                </div>
                <div className="totalPrice">${subtotal.toFixed(2)}</div>
            </div>

            {
                toggle && <div className="bagItems">
                    <BagItems/>
                </div>
            }

            <div className="subtotal">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="shipping">
                <span>Shipping</span>
                <span>Free</span>
            </div>

            <div className="tax">
                <span>Tax</span>
                <span>Calculated at next step</span>
            </div>

            <div className="orderTotal">
                <span>Order total</span>
                <span>CAD ${subtotal.toFixed(2)}</span>
            </div>
        </div>
    )
}
export default OrderSummary