import {useFormContext} from "react-hook-form";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

let flag = true
const ShippingInfo = () => {
    const {register, formState: {errors}, setValue} = useFormContext()
    const order = useSelector(state => state?.placeOrderReducers.order)
    const [shippingInfo, setShippingInfo] = useState({
        firstName: '',
        lastName: '',
        address: '',
        address_2: '',
        city: '',
        province: '',
        country: '',
        postcode: '',
        phone: ''
    })


    useEffect(() => {

        // console.log('order check', order)
        order && setShippingInfo({
            firstName: order.first_name,
            lastName: order.last_name,
            address: order.address,
            address_2: order.address_2,
            city: order.city,
            province: order.province,
            country: order.country,
            postcode: order.postcode,
            phone: order.phone
        })
    }, [order])

    useEffect(() => {
        const fillInput = obj => {
            setValue('first_name', obj.firstName)
            setValue('last_name', obj.lastName)
            setValue('address', obj.address)
            setValue('address_2', obj.address_2 && '')
            setValue('city', obj.city)
            setValue('province', obj.province)
            setValue('country', obj.country)
            setValue('postcode', obj.postcode)
            setValue('phone', obj.phone)
        }

        if(flag) {
            fillInput(shippingInfo)
            flag = false
        }
        return(() => {
            flag = true
        })
    }, [shippingInfo, setValue])

    return(
        <div>
            <div className="placeOrderInfoItem">
                <label><span>* </span>First Name:</label>
                <input type="text"
                       {...register('first_name', {
                           required: {value: true, message: "First name is required"},
                           pattern: {value: /^[A-Za-z]+$/, message: "Invalid first name type"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, firstName: e.target.value})
                           },
                       })}
                    autoFocus={true}
                    // value={shippingInfo.firstName}
                />
                {errors.first_name && <p>{errors.first_name?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Last Name:</label>
                <input type="text"
                       {...register('last_name', {
                           required: {value: true, message: "Last name is required"},
                           pattern: {value: /^[A-Za-z]+$/, message: "Invalid last name type"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, lastName: e.target.value})
                           }
                       })}
                    // value={shippingInfo.lastName}
                />
                {errors.last_name && <p>{errors.last_name?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Address:</label>
                <input type="text"
                       {...register('address', {
                           required: {value: true, message: "Address is required"},
                           // minLength: {value: 1, message: "Address is required"},
                           maxLength: {value: 100, message: "Out of Maximum length"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, address: e.target.value})
                           }
                       })}
                    // value={shippingInfo.address}
                />
                {errors.address && <p>{errors.address?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label>Address 2:</label>
                <input type="text" {...register('address_2', {
                    onChange: (e) => {
                        setShippingInfo({...shippingInfo, address_2: e.target.value})
                    }
                })} placeholder="Apt, suite, PO Box, tec. (optional)"
                       // value={shippingInfo.address_2}
                />
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>City:</label>
                <input type="text"
                       {...register('city', {
                           required: {value: true, message: "City is required"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, city: e.target.value})
                           }
                       })}
                    // value={shippingInfo.city}
                />
                {errors.city && <p>{errors.city?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Province / State:</label>
                <input type="text"
                       {...register('province', {
                           required: {value: true, message: "Province is required"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, province: e.target.value})
                           }
                       })}
                    // value={shippingInfo.province}
                />
                {errors.province && <p>{errors.province?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Country:</label>
                <input type="text"
                       {...register('country', {
                           required: {value: true, message: "Country is required"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, country: e.target.value})
                           }
                       })}
                    // value={shippingInfo.country}
                />
                {errors.country && <p>{errors.country?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Postal Code / Zip:</label>
                <input type="text"
                       {...register('postcode', {
                           required: {value: true, message: "Postal code is required"},
                           maxLength: {value: 6, message: "Invalid postal code"},
                           minLength: {value: 6, message: "Invalid postal code"},
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, postcode: e.target.value})
                           }
                       })}
                    // value={shippingInfo.postcode}
                />
                {errors.postcode && <p>{errors.postcode?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Phone number:</label>
                <input type="text"
                       {...register('phone', {
                           required: {value: true, message: "Phone number is required"},
                           pattern: {
                               value: /^[1-9]\d{2}-\d{3}-\d{4}/,
                               message: "Invalid phone number, correct type: ###-###-####"
                           },
                           onChange: (e) => {
                               setShippingInfo({...shippingInfo, phone: e.target.value})
                           }
                       })}
                    // value={shippingInfo.phone}
                />
                {errors.phone && <p>{errors.phone?.message}</p>}
            </div>
        </div>
    )
}
export default ShippingInfo