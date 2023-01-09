import {useDispatch} from "react-redux";
import {paymentMethod} from "../../../actions/placeOrderActions";

const SelectPayMethod = () => {
    const dispatch = useDispatch()

    const handleClick = e => {
        dispatch(paymentMethod(e.target.value))
    }

    return(
        <div>
            <h2 className="placeOrderInfoTitle">Payment Option</h2>
            <label htmlFor="paypal">
                <input type="radio" id="paypal" defaultChecked={true} name="payMethod" value="1" onClick={(e) => handleClick(e)}/>
                Paypal
            </label>
            <br/>
            <label htmlFor="strict">
                <input type="radio" id="strict" name="payMethod" value="2" onClick={(e) => handleClick(e)}/>
                WeChat
            </label>
        </div>
    )
}
export default SelectPayMethod