import './PopupMenu.scss'
import {useNavigate} from "react-router-dom";


const PopupMenu=({call, current_product, current_color, current_size})=>{
    const navigate = useNavigate()
    const handleCloseClick = () => {
        call(false)
    }
    const image = current_color.mainCarousel.media.split('|')[0]
    return(
        <div className='single_product_popupMenu'>
            <div className="title">
                <div className="left">
                    <h1>Added To Your Bag</h1>
                    <img src="/images/cart.svg" alt=""/>
                    <span>1 Items</span>
                </div>
                <div className="right"
                     onClick={()=>{handleCloseClick()}}
                >x</div>
            </div>
            <div className="content">
                <div className="left">
                    <img src={image} alt=""/>
                    <div className="description">
                        <h3>{current_product.name}</h3>
                        <p>Size: {current_size.name}</p>
                        <p>{current_product.price}</p>
                    </div>

                </div>
                <div className="right">
                    <div className="subtotal">
                        <span>Subtotal</span>
                        <span>{current_product.price}</span>
                    </div>
                    <div className="checkout_button"
                         onClick={()=>{navigate('/shop/mybag')}}
                    >
                        VIEW BAG & CHECKOUT
                    </div>
                    <div className="continue">
                        <span onClick={()=>handleCloseClick()}>CONTINUE SHOPPING
                        <img src="/images/arrow.svg" alt=""/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="goes_well">
                <h1>Goes well with</h1>
            </div>
        </div>
    )
}

export default PopupMenu