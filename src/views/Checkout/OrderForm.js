// import {useState} from "react";
// import {TAX_RATE} from "../../const";
// import {useSelector} from "react-redux";
// import './OrderForm.scss'
//
// const OrderForm = () => {
//    let currentOrderInfo = JSON.parse(localStorage.getItem('currentOrderInfo'))||{}
//
//
//
//    const updateOrderInfoLocal = () => {
//       localStorage.setItem('currentOrderInfo', JSON.stringify(currentOrderInfo))
//    }
//
//    //get price, taxRate, total
//    const subtotal = useSelector(state => state?.bagReducers.subtotal)
//    currentOrderInfo = {
//       ...currentOrderInfo,
//       price: subtotal.toFixed(2),
//       tax_rate: TAX_RATE,
//       total: (TAX_RATE *subtotal).toFixed(2),
//       order_status: 1,
//       payment: 1,
//    }
//
//    updateOrderInfoLocal()
//
//
//
//
//    const [enteredShippingAddress1, setEnteredShippingAddress1] = useState('')
//    const [enteredShippingAddress2, setEnteredShippingAddress2] = useState('')
//    const [enteredCountry, setEnteredCountry] = useState('')
//    const [enteredProvince, setEnteredProvince] = useState('')
//    const [enteredCity, setEnteredCity] = useState('')
//    const [enteredPostcode, setEnteredPostcode] = useState('')
//    const [enteredPhone, setEnteredPhone] = useState('')
//
//
//    const formArray = [
//       {
//          stateMethod: setEnteredShippingAddress1,
//          currentState: enteredShippingAddress1,
//          title: 'Address*',
//          keyName: 'address',
//          eg: '222 Yonge St'
//       },
//       {
//          stateMethod: setEnteredShippingAddress2,
//          currentState: enteredShippingAddress2,
//          title: 'Address-2',
//          keyName: 'address_2',
//          eg: 'unit1'
//       },
//       {
//          stateMethod: setEnteredPostcode,
//          currentState: enteredPostcode,
//          title: 'Postcode*',
//          keyName: 'postcode',
//          eg: 'M1V1V1'
//       },
//       {
//          stateMethod: setEnteredCountry,
//          currentState: enteredCountry,
//          title: 'Country*',
//          keyName: 'country',
//          eg: 'Canada'
//       },
//       {
//          stateMethod: setEnteredProvince,
//          currentState: enteredProvince,
//          title: 'Province*',
//          keyName: 'province',
//          eg: 'ON'
//       },
//       {
//          stateMethod: setEnteredCity,
//          currentState: enteredCity,
//          title: 'City*',
//          keyName: 'city',
//          eg: "Toronto"
//       },
//       {
//       stateMethod: setEnteredPhone,
//          currentState: enteredPhone,
//          title: 'Phone*',
//          keyName: 'phone',
//          eg: "6476476666",
//       },
//    ]
//
//    return<div>
//       {formArray.map((item, index) =>
//             <div className={'orderFormBlock'}>
//                <div className={'orderFormBlockTitle'}>{item.title}</div>
//                <input placeholder={'E.g. '+ item.eg} className={'orderFormInput'}
//                         onChange={(e) => item.stateMethod(e.target.value)}
//                         value={item.currentState}
//                         onBlur={() => {
//                            currentOrderInfo = {...currentOrderInfo, [item.keyName]: item.currentState}
//                            updateOrderInfoLocal()
//
//                         }}
//                />
//             </div>
//       )}
//
//    </div>
// }
//
// export default OrderForm