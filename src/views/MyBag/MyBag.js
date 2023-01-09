import './MyBag.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeQuantity, removeFromBag} from "../../actions/bagActions";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import EditItem from "../../components/Checkout/EditItem/EditItem";
import {fetchSingleProduct} from "../../actions/singleProductActions";


const MyBag = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bag = useSelector(state => state?.bagReducers?.bag)
    const subtotal = useSelector(state => state?.bagReducers?.subtotal)
    const quantity_total = useSelector(state => state?.bagReducers?.quantity_total)

    const handleQuantityChange = (e, index) => {
        dispatch(changeQuantity(e.target.value, index))
    }

    // pop out window for edit items in the bag
    const [popOut, setPopOut] = useState(false)
    const [bagIndex, setBagIndex] = useState(0)
    const closePopOut = () => {
        setPopOut(false)
    }
    const handleEditClick = (item, index) => {
        setPopOut(true)
        dispatch(fetchSingleProduct(item?.productId, item?.colorId, item?.size))
        setBagIndex(index)
    }

    return (
        <div className={'myBag__page'}>
            {
                popOut && <EditItem closePopOut={closePopOut} bagIndex={bagIndex}/>
            }
            <div className="content">
                <div className="container">
                    <div className="main">
                        <div className="main__left">
                            <h1 className="my_bag_head">
                                My Bag
                                <span>({quantity_total} Items)</span>
                            </h1>
                            <ul className={'items_in_bag'}>
                                {
                                    bag && bag.map((item, index) =>
                                        <li className="item_card">
                                            <img src={item.item_detail.pic} alt=""
                                                 onClick={() => handleEditClick(item, index)}
                                            />
                                            <div className="card_info">
                                                <div className="top_area">
                                                    <div className="left">
                                                        <div className="card_details">
                                                            <div className="item_name"
                                                                 onClick={() => handleEditClick(item, index)}
                                                            >
                                                                {item.item_detail.name}
                                                            </div>
                                                            <div className="item_color">
                                                                {item.item_detail.color}
                                                            </div>
                                                            <div className="item_size">
                                                                Size {item.size}
                                                            </div>

                                                            <div className="edit"
                                                                 onClick={() => handleEditClick(item, index)}
                                                            >
                                                                Edit
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="item_price">
                                                            <p>Item Price</p>
                                                            <p>${(item.item_detail.num_price).toFixed(2)}</p>
                                                        </div>
                                                        <div className="quantity">
                                                            <p>Quantity</p>
                                                            <select name="item_quantity" id=""
                                                                    value={item.quantity}
                                                                    onChange={(e)=>{handleQuantityChange(e,index)}}
                                                            >
                                                                <option value={1}>1</option>
                                                                <option value={2}>2</option>
                                                                <option value={3}>3</option>
                                                                <option value={4}>4</option>
                                                                <option value={5}>5</option>
                                                                <option value={6}>6</option>
                                                                <option value={7}>7</option>
                                                                <option value={8}>8</option>
                                                                <option value={9}>9</option>
                                                                <option value={10}>10</option>
                                                            </select>
                                                        </div>
                                                        <div className="total_price">
                                                            <p>Total Price</p>
                                                            <p>${(item.item_detail.num_price * item.quantity).toFixed(2)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom_area">
                                                    <div className="left">
                                                        Free Shipping + Free Returns
                                                    </div>
                                                    <div className="right">
                                                        <span>Save for Later</span>
                                                        <i>&nbsp;|&nbsp;</i>
                                                        <span onClick={()=>{dispatch(removeFromBag(index))}}
                                                        >Remove</span>
                                                    </div>
                                                </div>

                                            </div>


                                        </li>
                                    )
                                }

                            </ul>
                        </div>
                        <div className="main__right">
                            <h1 className={'main__right__title'}>Order Summary</h1>
                            <div className="right_subtotal">
                                <p>Subtotal</p>
                                <p>${(subtotal).toFixed(2)}</p>
                            </div>
                            <div className="shipping">
                                <p>Shipping
                                    <img src="/images/circle.svg" alt=""/>
                                </p>
                                <p>FREE</p>
                            </div>
                            <div className="tax">
                                <p>Tax
                                    <img src="/images/circle.svg" alt=""/>
                                </p>
                                <p>Calculated at checkout</p>
                            </div>
                            <div className="estimated_total">
                                <p>Estimated Total</p>
                                <p>CAD ${(subtotal).toFixed(2)}</p>
                            </div>
                            <p className={'other_payment_method'}>or 4 payments of ${(subtotal / 4).toFixed(2)} with
                                <img src="/images/afterpay.svg" alt="" className={'after_pay'}/>
                                or
                                <img src="/images/klarna.svg" alt="" className={'klarna'}/>
                                <img src="/images/circle.svg" alt="" className={'circle'}/>
                            </p>
                            <div className="checkout__button" onClick={()=>{navigate('/shop/checkout')}}>
                                    <img src="/images/logo_bw.svg" alt="" className={'logo_in_button'}/>
                                    CHECKOUT
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default MyBag