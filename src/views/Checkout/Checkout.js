import './Checkout.scss'
import {useEffect, useState} from "react";
// import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {loginCheck, recordLogin, userLogout} from "../../actions/checkoutActions";
// import {Payment} from "../../components/Payment/Payment";
import {useNavigate} from "react-router-dom";
import OrderSummary from "../../components/Checkout/OrderSummary/OrderSummary";
import PopOutMessage from "../../components/Checkout/PopOutMessage/PopOutMessage";
import {accountLogin} from "../../js/utils";
// import PaymentForm from "../../components/payment-form/payment-form.component";
import PaymentButtonOutside from "../../components/payment-form/PaymentButtonOutside";
// import {PLACE_ORDER} from "../../const";
// ========== mahua
// import {LOGIN_URL} from "../../const";
// import OrderForm from "./OrderForm";
// ========== mahua

const Checkout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showLogin, setShowLogin] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [emailFormatAlert, setEmailFormatAlert] = useState(false)
    const [passwordAlert, setPasswordAlert] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [btnActive, setBtnActive] = useState(false)
    const [popOutMessage, setPopOutMessage] = useState(false)
    const [popOutText, setPopOutText] = useState('')
    // const [popOutNavigate, setPopOutNavigate] = useState(undefined)



    const userData = useSelector(state => state?.checkoutReducers?.user_data)
    //------frank
    let loginStatus = userData?.login_status
    //------frank

    //-----mahua
    // const [loginStatus,setLoginStatus] = useState(!!localStorage.getItem('token'))
    //-----mahua

    // const bag = useSelector(state => state?.bagReducers?.bag)

    const handleLoginClick = () => {
        setShowLogin(state => !state)
    }
    const handleEmailBlur = (e) => {
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        // console.log('test reg', reg.test(e.target.value))
        if (e.target.value === '') {
            setEmailAlert(true)
            setEmailFormatAlert(false)
        } else if (!reg.test(e.target.value)) {
            setEmailAlert(false)
            setEmailFormatAlert(true)
        } else {
            setEmailAlert(false)
            setEmailFormatAlert(false)
        }
    }
    const handlePasswordBlur = (e) => {
        if (e.target.value === '') {
            setPasswordAlert(true)
        } else {
            setPasswordAlert(false)
        }
    }

    // ========== mahua
    // sign in click
    // let currentOrderInfo = {}
    // ========== mahua



    const handleSignInClick = () => {
        //------mahua
        // axios.post( LOGIN_URL,{email:email,password:password})
        //     .then(res => {
        //         console.log(res.data.data)
        //
        //         res.data.status = 'Success' && setLoginStatus(true)
        //
        //         let userInfo = res.data?.data?.user
        //         currentOrderInfo = {
        //             first_name: userInfo.firstName,
        //             last_name: userInfo.lastName,
        //             user: userInfo.id,
        //
        //         }
        //
        //         localStorage.setItem('token',res.data.data.token)
        //         localStorage.setItem('currentOrderInfo',JSON.stringify(currentOrderInfo))

                //Duplicate from Frank
                // dispatch(recordLogin(res.data.data))
                // console.log(res)
                // setPopOutMessage(true)
                // setPopOutText('Login Success')
                //Duplicate from Frank


            // })
            // .catch(err=>{

                //Duplicate from Frank
                //             let message = err?.response?.data?.message.split('/')[0].trim()
                //             setPopOutMessage(true)
                //             setPopOutText(message)
                //Duplicate from Frank

                // }
            // )
        //------mahua



        //--------Frank
        if (btnActive) {
            accountLogin(email, password)
                .then(res => {
                    dispatch(recordLogin(res.data.data))
                    setPopOutMessage(true)
                    setPopOutText('Login Success')
                    console.log('response check===>', res)
                }).catch(err => {
                    let message = err?.response?.data?.message.split('/')[0].trim()
                    setPopOutMessage(true)
                    setPopOutText(message)
            })
        }
        //--------Frank
    }

    const handleLogoutClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('currentOrderInfo')
        // setLoginStatus(false)
        dispatch(userLogout())
        setPopOutMessage(true)
        setPopOutText('Log out success')


    }
    const handlePlaceOrderClick = () => {
        if (userData.login_status) {
            // let token = userData.token
            // let obj = bag.map(item => ({
            //     quantity: Number(item.quantity),
            //     productId: item.productId,
            //     colorId: item.colorId,
            //     size: item.size === 'one-size' ? '0' : item.size,
            // }))
            //
            // let body = {
            //     taxRate: 1.13,
            //     isActive: true,
            //     isDelete: false,
            //     orderItems: obj,
            // }
            // axios.post(PLACE_ORDER, body, {
            //     headers: {
            //         authorization: 'bear ' + token,
            //     }
            // }).then(res => {
            //     setPopOutMessage(true)
            //     setPopOutText("Your order has been placed")
            //     dispatch(changeCanPayStatus(true))
            // }).catch(err => {
            //     console.log('what is the error', err)
            //     setPopOutMessage(true)
            //     setPopOutText("Can't Place Order, try later")
            // })
            navigate('/shop/placeOrder')
        } else {
            setPopOutMessage(true)
            setPopOutText("Please login")
        }
    }
    const closePopOutWindow = () => {
        setPopOutMessage(false)
    }

    useEffect(() => {
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (reg.test(email) && password !== '') {
            setBtnActive(true)
        } else {
            setBtnActive(false)
        }
    }, [email, password])

    // check user login status
    useEffect(() => {
        dispatch(loginCheck())
    }, [dispatch])

    // set default email
    //--------Frank
    useEffect(() => {
        if (userData) {
            setEmail(userData.user.email)
        }
    }, [userData])
    //--------Frank

    return (
        <div className={'final_checkout_page'}>
            {
                popOutMessage && <PopOutMessage closePopOutWindow={closePopOutWindow}
                                                // location={popOutNavigate}
                >{popOutText}</PopOutMessage>
            }
            <div className="container">
                <h1 className={'checkout__title'}>Checkout</h1>
                <div className="main_content">
                    <div className="main_left_area">
                        {
                            !loginStatus && <div className="account">
                                <h1>Have an account</h1>
                                <p onClick={() => {
                                    handleLoginClick()
                                }} className={'account_info'}>
                                    <span>Log in</span>
                                    &nbsp;to checkout more quickly and easily
                                    <img src="/images/arrow_down.svg" alt=""
                                         style={{transform: showLogin ? 'rotate(180deg)' : 'rotate(0)'}}
                                    />
                                </p>
                                <div className="log_in_area"
                                     style={{display: showLogin ? 'block' : 'none',}}
                                >
                                    <div className="log_in_top">
                                        <div className="email_address">
                                            <p>Email address</p>
                                            <input type="email"
                                                   onBlur={(e) => {
                                                       handleEmailBlur(e)
                                                   }}
                                                   onChange={(e) => {
                                                       setEmail(e.target.value)
                                                   }}
                                                   value={email}
                                            />
                                            {
                                                emailAlert && <p className="email_alert">Please enter an email address</p>
                                            }
                                            {
                                                emailFormatAlert &&
                                                <p className="email_format_alert">Email address is not in the correct format<br/>(xxx@yyy.zzz).
                                                    Please correct the email address</p>
                                            }

                                        </div>
                                        <div className="password">
                                            <p>Password
                                                <img src="/images/circle.svg" alt="" className='circle'/>
                                            </p>
                                            <input type="password"
                                                   onBlur={(e) => {
                                                       handlePasswordBlur(e)
                                                   }}
                                                   onChange={(e) => {
                                                       setPassword(e.target.value)
                                                   }}
                                                   value={password}
                                            />
                                            {
                                                passwordAlert &&
                                                <p className="password_alert">Please enter your password</p>
                                            }
                                            <p className="forgot_password">Forgot your password?</p>
                                        </div>
                                    </div>
                                    <div className="log_in_bottom">
                                        <div className="sign_in_button"
                                             style={{
                                                 backgroundColor: btnActive ? 'black' : '#bfbfbf',
                                                 cursor: btnActive ? 'pointer' : 'not-allowed',
                                             }}
                                             onMouseEnter={e => {
                                                 btnActive && (e.target.style.backgroundColor = '#838383')
                                             }}
                                             onMouseLeave={e => {
                                                 btnActive && (e.target.style.backgroundColor = 'black')
                                             }}
                                             onClick={() => {
                                                 handleSignInClick()
                                             }}
                                        >
                                            SIGN IN
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            loginStatus && <div className={'login_user_welcome'}>
                                <h1>Hello {userData?.user?.lastName}</h1>
                                <div className="logoutBtn"
                                     onClick={() => {
                                         handleLogoutClick()
                                     }}
                                >Logout
                                </div>
                            </div>
                        }

                        {/*<div className="shipping_address">*/}
                        {/*    <h1>Shipping address</h1>*/}
                        {/*    <p>hard code</p>*/}
                        {/*</div>*/}
                        <div className="go_to_next_step">
                            {
                                (!userData?.canPayStatus || !loginStatus) && <div className="next_step_button"
                                                                                  onClick={() => {
                                                                                      handlePlaceOrderClick()
                                                                                  }}
                                >
                                    PLACE ORDER
                                </div>
                            }

                            {
                                // (userData?.canPayStatus && loginStatus) && <div className="payment_method">
                                //     <Payment/>
                                // </div>
                            }


                        </div>
                    </div>
                    <div className="main_right_area">
                        <OrderSummary/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout