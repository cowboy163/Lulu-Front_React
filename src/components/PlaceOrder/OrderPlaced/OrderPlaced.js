import './OrderPlaced.scss'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import {GET_ORDERS} from "../../../const";
import OrderCard from "./OrderCard/OrderCard";
import DownloadReceiptButton from "./DownloadReceiptButton/DownloadReceiptButton";
import {useSelector} from "react-redux";

const OrderPlaced = () => {
    const [select, setSelect] = useState("6")
    const [orders, setOrders] = useState(null)

    const user = useSelector(state => state?.checkoutReducers?.user_data)

    //test
    useEffect(() => {
        console.log('user data check ===>', user)
    }, [user])

    const receiptRef = useRef()
    // useEffect(() => {
    //     console.log('select check', select)
    // }, [select])

    useEffect(() => {
        if (select) {
            axios.patch(`${GET_ORDERS}/${select}?userId=${user.user.id}`)
                .then(res => {
                    let arr = (res.data.data).reverse()
                    // console.log('order check', res.data.data)
                    // console.log('order check', arr)

                    setOrders(arr)
                }).catch(e => {
                console.log('fetch orders error ', e)
            })
        }
    }, [select, user])

    return (
        <div className='orderPlacedMain'>
            <h1>ORDERS</h1>
            <div className="periodSelector" onClick={e => setSelect(e.target.value)}>
                <label htmlFor="sixMonth">
                    <input type="radio" id="sixMonth" name="orderTime" defaultChecked={true} value="6"/>
                    Last 6 Months
                </label>

                <label htmlFor="oneYear">
                    <input type="radio" id="oneYear" name="orderTime" value="12"/>
                    Last Year
                </label>

                <label htmlFor="allTime">
                    <input type="radio" id="allTime" name="orderTime" value="all"/>
                    All Time
                </label>
            </div>

            <div style={{paddingTop: '1rem'}}>
                <DownloadReceiptButton receiptRef={receiptRef}/>
            </div>

            <div className="orderCard" ref={receiptRef} style={{padding: '0 32px'}}>
                {
                    orders && orders?.map((item, index) =>
                        <div className="orderCardList" key={index}>
                            <OrderCard item={item}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OrderPlaced