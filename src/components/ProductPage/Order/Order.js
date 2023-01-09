import {useDispatch, useSelector} from "react-redux";
import './Order.scss'
import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import PopupMenu from "../../../views/Product/PopupMenu/PopupMenu";
import Mask from "../../NavBar/Mask/Mask";
import {addToBag} from "../../../actions/bagActions";

const Order = () => {
    const navigate = useNavigate()
    const shipRef = useRef()
    const dispatch = useDispatch()
    const current_product = useSelector(state => state?.singleProductReducers.single_product_data)
    const current_colour = useSelector(state => state?.singleProductReducers.current_colour)
    const current_size = useSelector(state => state?.singleProductReducers.current_size)
    const [sizeText, setSizeText] = useState('Select Size')
    const [unfold, setUnfold] = useState(false)
    const [isShip, setIsShip] = useState(true)
    const [isCurrentSize, setIsCurrentSize] = useState(true)
    const [showPopup, setShowPopup] = useState(false)
    const [btnText, setBtnText] = useState('ADD TO BAG')
    const handleSizeClick = (index) => {
        navigate(`/${current_product.productId}?color=${current_colour.colorId}&sz=${current_product.sizes[0].details[index]}`)
        setSizeText('Size')
        setIsCurrentSize(true)
    }

    const handleColorClick = (item) => {
        if (current_size?.name) {
            navigate(`/${current_product.productId}?color=${item.colorId}&sz=${current_size.name}`)
        } else {
            navigate(`/${current_product.productId}?color=${item.colorId}`)
        }
    }
    const handleShipClick = () => {
        setUnfold(!unfold)
    }
    const handleDeliveryClick = (e) => {
        if(e.target.id === 'ship_1') {
            setIsShip(true)
        } else if (e.target.localName === 'input') {
            setIsShip(false)
        }
        // console.log('e check===>',e)
    }
    const handleAddButton = () => {
        if(!current_size && (current_product.sizes[0].details.length > 0)) {
            setIsCurrentSize(false)
        } else {
            setIsCurrentSize(true)
            setShowPopup(true)
            let obj = {
                quantity: 1,
                productId: current_product.productId,
                colorId: current_colour.colorId,
                size: current_size?.name? current_size.name:'one-size',
            }
            let detail_obj = {
                name: current_product.name,
                price: current_product.price,
                color: current_colour.colorAlt,
                pic: current_colour.mainCarousel.media.split('|')[0]
            }
            dispatch(addToBag(obj, detail_obj))
        }
    }
    const closePopupMenu = input => {
        setShowPopup(input)
    }
    const handleDetailClick = (index) => {
        document.getElementById(`according${index}`).scrollIntoView()
    }
    useEffect(() => {
        if (current_product?.sizes[0]?.details.length === 0) {
            setSizeText('Size')
        }
    }, [current_product?.sizes])
    useEffect(()=>{
        if(isShip) {
            setBtnText('ADD TO BAG')
        } else {
            setBtnText('ADD TO PICK UP AT-STORE')
        }
    },[isShip])

    return (
        <div className='single_product_order'>
            {
                showPopup && <div>
                    <Mask opacity={0.5} zIndex={5}/>
                    <PopupMenu call={closePopupMenu}
                               current_product={current_product}
                               current_color={current_colour}
                               current_size={current_size? current_size:{name:'one size'}}
                    />
                </div>
            }

            <div className='single_product_location'>
                <span>Women's Clothes</span>
                <span>Shirts</span>
            </div>
            <h1 className='single_product_title'>
                {
                    current_product?.name
                }
            </h1>
            <div className='single_product_price'>
                {
                    '$' + current_product?.price_num
                }
                &nbsp;<span>CAD</span>
            </div>
            <div className='other_payment_method'>
                or 4 payments of <span>{current_product?.price_num / 4}</span>
                with
                <img src="/images/afterpay.svg" alt="" className='after_pay'/>
                or
                <img src="/images/klarna.svg" alt="" className='klarna'/>
                <img src="/images/circle.svg" alt="" className='circle'/>
            </div>
            <div className='single_product_color'>
                <span className='title'>Colour</span>
                <span className='current_colour'>
                    {
                        current_colour?.colorAlt
                    }
                </span>
                <ul className='colours'>
                    {
                        current_product?.swatches?.map((item, index) =>
                            <li key={index}
                                className={index === current_colour?.index ? 'active' : ''}
                                onClick={() => handleColorClick(item)}
                            >
                                <img src={item.swatch} alt=""/>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className='single_product_size'>
                {
                    !isCurrentSize && <div className='notified'>
                        <img src="/images/alert.svg" alt=""/>
                        <span>Please select a size.</span>
                    </div>
                }

                <div className='head'>
                    <h3 className='left'>{sizeText}
                        {
                            current_product?.sizes[0].details.length === 0 && <span>One Size</span>
                        }
                        {
                            current_product?.sizes[0].details.length > 0 && <span>{current_size?.name}</span>
                        }
                    </h3>
                    <h3 className='right'>Size Guide</h3>
                </div>
                <ul className='content'>
                    {
                        current_product?.sizes[0].details.length > 0 && current_product?.sizes[0].details.map((item, index) =>
                            <li key={index}
                                onClick={() => handleSizeClick(index)}
                                className={index === current_size?.index ? 'active' : ''}
                            >
                                {item}
                            </li>
                        )
                    }
                    {
                        current_product?.sizes[0].details.length === 0 && <li className='active'>
                            One Size
                        </li>
                    }
                </ul>
                <div className='other'>
                    <p className='top'>Size sold out? Select size to get notified</p>
                    <p className='bottom'>
                        <i className='t_logo'>
                            <img
                                src="https://cdn.truefitcorp.com/store-lls/7.0.0-localized.48/resources/store/lls/images-snapshot/responsive/logo/bg-logo-red.svg"
                                alt=""/>
                        </i>
                        <span>What's My Size</span>
                    </p>
                </div>
            </div>
            <div className='single_product_button'>
                <div className="delivery_method"
                     onClick={(e)=>{handleDeliveryClick(e)}}
                >
                    <div className="ship">
                        <div className="border"
                             style={{
                                 boxShadow:isShip?'0 0 0 2px black':'0 0 0 0 white',
                             }}
                        >
                            <div className="top">
                                <input type="radio" name='ship' defaultChecked={true}
                                       ref={shipRef}
                                       id='ship_1'
                                /> <span style={{
                                fontWeight:isShip?'900':'400',
                            }}
                            >Ship it to me</span>
                            </div>
                            <p>Free shipping and returns</p>
                        </div>

                    </div>
                    <div className="pickUp">
                        <div className="top"
                             onClick={() => {
                                 handleShipClick()
                             }}
                        >
                            <div className="left">
                                <img src="/images/store.svg" alt=""/>
                                <span style={{
                                    fontWeight: !isShip? '900':'400',
                                }}
                                >Pick up in-store</span>
                            </div>
                            <div className="right">
                                <img src="/images/minus.svg" alt=""
                                     style={{transform: unfold ? 'rotate(0deg)' : 'rotate(90deg'}}
                                />
                                <img src="/images/minus.svg" alt=""/>
                            </div>
                        </div>
                        <div className="bottom"
                             style={{display: unfold ? 'block' : 'none'}}
                        >
                            <p className='ship_des'>Available for Buy & Pick-Up at these locations in <span>North York, Ontario</span>&nbsp;
                                <span className='change_location'>Change Locations</span> Pick up in-store within 2
                                hours.</p>
                            <div className="line">
                                <label><input type="radio" name='ship' id='location_1'/>Yonge St.</label>
                                <div className="text"></div>
                            </div>
                            <div className="line">
                                <label><input type="radio" name='ship' id='location_2'/>Fairview Mall</label>
                                <div className="text"></div>
                            </div>
                            <div className="line">
                                <label><input type="radio" name='ship' id='location_3'/>Scarborough Town Centre</label>
                                <div className="text"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add">
                    <div className='add__button'
                         onClick={()=>{handleAddButton()}}
                    >{btnText}</div>
                    <div className='check_inventory'>Check All Store Inventory</div>
                </div>
            </div>
            <div className='single_product_other'>
                <div className="head">
                    {
                        '0' + current_colour?.colorId + ' | SKU: 144356467'
                    }
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="/images/fav.svg" alt=""/>
                        <span>Add to Wish List</span> 
                    </div>
                    <div className="right">
                        <img src="/images/review.svg" alt=""/>
                       <span>Reviews(7)</span> 
                    </div>
                </div>
            </div>
            <div className='single_product_details'>
                <h3 className="title">Details</h3>
                <ul>
                    {
                        current_product?.featureTitles?.map((item, index) =>
                            <li key={index}
                                onClick={()=>{handleDetailClick(index)}}
                            >
                                <img src={item.iconPath} alt=""/>
                                <span>
                                    {item.title}
                                </span>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className='single_product_questions'>
                <div className="left">
                    <h3>Questions? Bring them on (all of them)</h3>
                    <p>Virtual shop with one of our educators</p>
                </div>
                <div className="arrow">
                    <img src="/images/arrow.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Order