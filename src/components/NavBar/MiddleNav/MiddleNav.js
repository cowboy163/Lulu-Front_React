import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {hoverData} from "../../../actions/navBarActions";
import "./MiddleNav.scss"
import {Link} from "react-router-dom";
import HoverLabel from "../../HoverLabel/HoverLabel";
import Bag from "./Bag/Bag";
import {useEffect, useState} from "react";
import {getBag} from "../../../actions/bagActions";

const MiddleNav = ({value, isFly, topBarHeight}) => {
    const [showBag, setShowBag] = useState(false)
    const dispatch = useDispatch()
    const quantity_total = useSelector(state => state?.bagReducers?.quantity_total)
    const handleMouseEnter = value => {
        dispatch(hoverData(value))
    }
    const handleCartMouseEnter = () => {
        setShowBag(quantity_total > 0)
    }

    const hideBag = flag => {
        setShowBag(flag)
    }
    useEffect(()=>{
        dispatch(getBag())
    },[dispatch])

    return (
        <div className="middleNav" style={{
            height: "80px",
            lineHeight: "80px",
            position: isFly ? 'fixed' : 'absolute',
            top: isFly ? `-${topBarHeight}px` : '0',
        }}>
            <div className="container"
                 style={{
                     display: "flex",
                     justifyContent: "space-between",
                     zIndex: "2"
                 }}
            >
                <ul style={{
                    display: "flex",
                    alignItems: "center",
                }}
                    className="middleNav__ul"
                >
                    <Link className="logo"
                          to="/"
                    >
                        <img src="/images/logo.svg" alt=""
                             width="40px"
                        />
                    </Link>
                    {
                        value.map(item =>
                            <li key={item.item}
                                onMouseEnter={() => {
                                    handleMouseEnter(item)
                                }}
                            >
                                <Link to={item.url}
                                      className="middleNav__navList"
                                >
                                    <HoverLabel weight='5px' length='25px'>
                                        {item.item}
                                    </HoverLabel>
                                </Link>
                            </li>
                        )
                    }
                </ul>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}
                     className="rightPart"
                >
                    <Search/>
                    <div className="bag"
                         onMouseEnter={()=>{handleCartMouseEnter()}}
                    >
                        <Cart>{quantity_total}</Cart>
                        {
                            showBag && <Bag call={hideBag}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MiddleNav