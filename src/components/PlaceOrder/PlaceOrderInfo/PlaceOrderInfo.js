// ========== mahua ==========
// import {useState} from "react";
// import {useSelector} from "react-redux";
// import {TAX_RATE} from "../../../const";
// ========== mahua ==========

import './PlaceOrderInfo.scss'
import {useForm, FormProvider} from "react-hook-form";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {shippingInfoPost} from "../../../actions/placeOrderActions";
import {loginCheck} from "../../../actions/checkoutActions";
import BillingInfo from "./BillingInfo/BillingInfo";
import ShippingInfo from "./ShippingInfo/ShippingInfo";

const PlaceOrderInfo = ({getFormState}) => {
    // ========== frank
    // const {register, handleSubmit, formState: {errors}, setValue} = useForm()
    const methods = useForm()
    const dispatch = useDispatch()

    // const [shippingInfo, setShippingInfo] = useState(null)
    // flag that shows if the billing address is same with shipping address
    const [checkBox, setCheckBox] = useState(true)

    const userData = useSelector(state => state?.checkoutReducers?.user_data)
    const bag = useSelector(state => state?.bagReducers?.bag)

    const getCheckBox = checkBox => {
        setCheckBox(checkBox)
    }
    // const getShippingInfo = (data) => {
    //     setShippingInfo(data)
    // }

    useEffect(() => {
        dispatch(loginCheck())
    }, [dispatch])

    // useEffect(() => {
    //     console.log('form state check', methods.formState.isValid)
    // }, [methods.formState.isValid])

    useEffect(() => {
        getFormState(methods.formState.isValid)
    }, [methods.formState.isValid, getFormState])

    return (
        <div className='placeOrderInfo'>
            <h1 className="placeOrderInfoTitle">Shipping Information:</h1>
            <FormProvider {...methods}>

            <form onSubmit={methods.handleSubmit(data => {
                dispatch(shippingInfoPost(data, userData, bag, checkBox))
            })} className="placeOrderInfoForm" id="place-order-form">
                <ShippingInfo />

                <BillingInfo getCheckBox = {getCheckBox}/>

            </form>
            </FormProvider>
        </div>
    )

    // ========== frank

    // ========== mahua
    // let currentOrderInfo = JSON.parse(localStorage.getItem('currentOrderInfo'))||{}
    //
    // const updateOrderInfoLocal = () => {
    //     localStorage.setItem('currentOrderInfo', JSON.stringify(currentOrderInfo))
    // }

    //get price, taxRate, total
    // const subtotal = useSelector(state => state?.bagReducers.subtotal)
    // currentOrderInfo = {
    //     ...currentOrderInfo,
    //     price: subtotal.toFixed(2),
    //     tax_rate: TAX_RATE,
    //     total: (TAX_RATE *subtotal).toFixed(2),
    //     order_status: 1,
    //     payment: 1,
    // }
    //
    // updateOrderInfoLocal()
    //
    // const [enteredShippingAddress1, setEnteredShippingAddress1] = useState('')
    // const [enteredShippingAddress2, setEnteredShippingAddress2] = useState('')
    // const [enteredCountry, setEnteredCountry] = useState('')
    // const [enteredProvince, setEnteredProvince] = useState('')
    // const [enteredCity, setEnteredCity] = useState('')
    // const [enteredPostcode, setEnteredPostcode] = useState('')
    // const [enteredPhone, setEnteredPhone] = useState('')
    //
    //
    // const formArray = [
    //     {
    //         stateMethod: setEnteredShippingAddress1,
    //         currentState: enteredShippingAddress1,
    //         title: 'Address*',
    //         keyName: 'address',
    //         eg: '222 Yonge St'
    //     },
    //     {
    //         stateMethod: setEnteredShippingAddress2,
    //         currentState: enteredShippingAddress2,
    //         title: 'Address-2',
    //         keyName: 'address_2',
    //         eg: 'unit1'
    //     },
    //     {
    //         stateMethod: setEnteredPostcode,
    //         currentState: enteredPostcode,
    //         title: 'Postcode*',
    //         keyName: 'postcode',
    //         eg: 'M1V1V1'
    //     },
    //     {
    //         stateMethod: setEnteredCountry,
    //         currentState: enteredCountry,
    //         title: 'Country*',
    //         keyName: 'country',
    //         eg: 'Canada'
    //     },
    //     {
    //         stateMethod: setEnteredProvince,
    //         currentState: enteredProvince,
    //         title: 'Province*',
    //         keyName: 'province',
    //         eg: 'ON'
    //     },
    //     {
    //         stateMethod: setEnteredCity,
    //         currentState: enteredCity,
    //         title: 'City*',
    //         keyName: 'city',
    //         eg: "Toronto"
    //     },
    //     {
    //         stateMethod: setEnteredPhone,
    //         currentState: enteredPhone,
    //         title: 'Phone*',
    //         keyName: 'phone',
    //         eg: "6476476666",
    //     },
    // ]
    //
    // return<div>
    //     <form>
    //         {formArray.map((item, index) =>
    //             <div className={'orderFormBlock'}>
    //                 <div className={'orderFormBlockTitle'}>{item.title}</div>
    //                 <input ref={register}
    //                        placeholder={'E.g. '+ item.eg} className={'orderFormInput'}
    //                        onChange={(e) => item.stateMethod(e.target.value)}
    //                        value={item.currentState}
    //                        onBlur={() => {
    //                            currentOrderInfo = {...currentOrderInfo, [item.keyName]: item.currentState}
    //                            updateOrderInfoLocal()
    //
    //                        }}
    //                 />
    //             </div>
    //         )}
    //         <button type="submit">Submit</button>
    //     </form>
    // </div>
    // ========== mahua
}

export default PlaceOrderInfo