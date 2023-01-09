
import './Bag.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeFromBag} from "../../../../actions/bagActions";
import {useNavigate} from "react-router-dom";

const Bag = ({call}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const bag = useSelector(state => state?.bagReducers?.bag)
    const subtotal = useSelector(state => state?.bagReducers?.subtotal)
    const quantity_total = useSelector(state => state?.bagReducers?.quantity_total)
    const handleDeleteClick = (index) => {
        dispatch(removeFromBag(index))
    }

    const handleBagMouseLeave = () => {
        call(false)
    }
    return(
        <div className={'navBar__my_bag'}
             onMouseLeave={()=>{handleBagMouseLeave()}}
        >
            <div className="title">
                <h1>
                    Items In Your Bag
                </h1>
            </div>
            <ul className={'items_in_bag'}>
                {
                    bag && bag.map((item, index) =>
                        <li className="content">
                            <div className="picture">
                                <img src={item.item_detail.pic} alt=""/>
                            </div>
                            <div className="info">
                                <div className="line1">
                                    <div className="left">
                                        {item.item_detail.name}
                                    </div>
                                    <div className="right"
                                         onClick={()=>{handleDeleteClick(index)}}
                                    >x</div>
                                </div>
                                <div className="line2">
                                    {item.item_detail.color}
                                </div>
                                <div className="line3">
                                    Size {item.size}
                                </div>
                                <div className="line4">
                                    <div className="left">
                                        Quantity {item.quantity}
                                    </div>
                                    <div className="right">
                                        ${item.item_detail.num_price * item.quantity} CAD
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>


            <div className="checkOut">
                <div className="line1">
                    <div className="left">
                        Subtotal &nbsp;
                        <span>({quantity_total} items)</span>
                    </div>
                    <div className="right">
                        ${subtotal}.00
                    </div>
                </div>
                <div className="line2">
                    <div className="left">Shipping</div>
                    <div className="right">FREE</div>
                </div>
                <div className="view_bag"
                     onClick={()=>{navigate('/shop/mybag')}}
                >
                    VIEW BAG & CHECKOUT
                </div>
            </div>
        </div>
    )
}

export default Bag