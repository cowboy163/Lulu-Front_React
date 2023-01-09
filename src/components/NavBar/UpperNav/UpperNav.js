import './UpperNav.scss'
import {Link} from "react-router-dom";
import HoverLabel from "../../HoverLabel/HoverLabel";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginCheck} from "../../../actions/checkoutActions";
import PullDownMenu from "./PullDownMenu/PullDownMenu";


const UpperNav = ({value, setPullDown}) => {
    const dispatch = useDispatch()
    const myRef = useRef()

    const userData = useSelector(state => state?.checkoutReducers?.user_data)
    const [pullDownMenu, setPullDownMenu] = useState(false)
    useEffect(() => {
        if (myRef.current) {
            value(myRef.current.offsetHeight)
        }
    }, [value])

    useEffect(() => {
        dispatch(loginCheck())
    }, [dispatch])

    return (
        <div className="upperNav"
             ref={myRef}
             style={{
                 zIndex: pullDownMenu ? '6' : '2',
             }}
        >
            {/*<div className="upperNavMask"></div>*/}
            <ul style={{
                display: 'flex',
                justifyContent: 'flex-end',
                height: '36px',
                lineHeight: '36px',
            }}
                className="container"
            >
                <li>
                    <Link to="#" className="link">
                        <img src="/images/storeLocator.svg" alt="" width="14px"/>
                        <HoverLabel>Store Locator</HoverLabel>
                    </Link>
                </li>
                <li>
                    <Link to={userData?.login_status? '/account/dashboard':'/account/login'} className="link">
                        <img src="/images/signIn.svg" alt="" width="18px"/>
                        <HoverLabel>
                            {
                                userData?.login_status ?
                                    <p onMouseEnter={() => {
                                        setPullDownMenu(true)
                                        setPullDown(true)
                                    }}>My Account</p>
                                    :
                                    <p>Sign In</p>
                            }
                        </HoverLabel>
                    </Link>
                    {
                        pullDownMenu && <PullDownMenu setPullDownMenu={setPullDownMenu}
                                                      setPullDown={setPullDown}
                        />
                    }

                </li>
                <li>
                    <Link to="#" className="link">
                        <img src="/images/wishList.svg" alt="" width="18px" style={{marginBottom: "2px"}}/>
                        <HoverLabel>Wish List</HoverLabel>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="link">
                        <img src="/images/giftCard.svg" alt="" width="18px"/>
                        <HoverLabel>Gift Cards</HoverLabel>
                    </Link>
                </li>
                <li>
                    <Link to="#" className="link">
                        <img src="/images/can.svg" alt="" width="18px"/>
                        <HoverLabel>CAN</HoverLabel>
                    </Link>
                </li>
            </ul>
        </div>

    )
}
export default UpperNav