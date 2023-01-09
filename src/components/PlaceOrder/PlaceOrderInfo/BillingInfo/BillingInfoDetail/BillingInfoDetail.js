import {useFormContext} from "react-hook-form";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

// sign that make input empty or default value
let flag = true
const BillingInfoDetail = ({checkBox}) => {
    const {register, formState: {errors}, setValue} = useFormContext()
    const payment = useSelector(state => state?.placeOrderReducers.payment)
    const initInfo = {
        firstName: 'default',
        lastName: 'default',
        address: 'default',
        address_2: 'default',
        city: 'default',
        province: 'default',
        country: 'default',
        postcode: 'apples',
        phone: '123-123-1234'
    }
    const emptyInfo = {
        firstName: '',
        lastName: '',
        address: '',
        address_2: '',
        city: '',
        province: '',
        country: '',
        postcode: '',
        phone: ''
    }

    const [billingInfo, setBillingInfo] = useState(initInfo)
    const [billingInfoBackup, setBillingInfoBackup] = useState(emptyInfo)
    // const [test, setTest] = useState("apple")
    //
    // useEffect(async () => {
    //     console.log('step 1', test)
    //     setTest('pear')
    //     console.log('final: ', test)
    // } ,[test])

    useEffect(() => {
        if(!checkBox && payment) {
            // console.log('payment check ', payment)
            setBillingInfoBackup({
                firstName: payment.first_name,
                lastName: payment.last_name,
                address: payment.address,
                address_2: payment.address_2,
                city: payment.city,
                province: payment.province,
                country: payment.country,
                postcode: payment.postcode,
                phone: payment.phone
            })
            setBillingInfo( {
                firstName: payment.first_name,
                lastName: payment.last_name,
                address: payment.address,
                address_2: payment.address_2,
                city: payment.city,
                province: payment.province,
                country: payment.country,
                postcode: payment.postcode,
                phone: payment.phone
            })
        }
    }, [checkBox, payment])

    // useEffect(() => {
    //     console.log('billingInfoBackup check', billingInfoBackup)
    // }, [billingInfoBackup])
    //
    // useEffect(() => {
    //     console.log('payment check!!!', payment)
    //     console.log('billing info check ===>', billingInfo)
    // }, [billingInfo, payment])

    // set billing address default value
    useEffect(() => {
        const initInfo = {
            firstName: 'default',
            lastName: 'default',
            address: 'default',
            address_2: 'default',
            city: 'default',
            province: 'default',
            country: 'default',
            postcode: 'apples',
            phone: '123-123-1234'
        }
        const defaultInput = () => {
            setValue('bill_first_name', 'default')
            setValue('bill_last_name', 'default')
            setValue('bill_address', 'default')
            setValue('bill_address_2', 'default')
            setValue('bill_city', 'default')
            setValue('bill_province', 'default')
            setValue('bill_country', 'default')
            setValue('bill_postcode', 'apples')
            setValue('bill_phone', '123-123-1234')
        }

        const fillInput = obj => {
            setValue('bill_first_name', obj.firstName)
            setValue('bill_last_name', obj.lastName)
            setValue('bill_address', obj.address)
            setValue('bill_address_2', obj.address_2 && '')
            setValue('bill_city', obj.city)
            setValue('bill_province', obj.province)
            setValue('bill_country', obj.country)
            setValue('bill_postcode', obj.postcode)
            setValue('bill_phone', obj.phone)
        }
        // console.log('check point 0')
        if(checkBox === true) {
            // console.log('check point 1')
            defaultInput()
            flag = true
        } else if(flag){
            // console.log('check point 2',flag)
            fillInput(billingInfoBackup)
            setBillingInfo({...billingInfoBackup})
            flag = false
            // console.log('check point 3',flag)
        } else if(billingInfo.firstName !== 'default') {
            fillInput(billingInfo)
        }
    }, [checkBox, billingInfoBackup, setValue, billingInfo])

    // record the billing information in billingInfoBackup
    useEffect(() => {
        const initInfo = {
            firstName: 'default',
            lastName: 'default',
            address: 'default',
            address_2: 'default',
            city: 'default',
            province: 'default',
            country: 'default',
            postcode: 'apples',
            phone: '123-123-1234'
        }
        let initCheck = true
        for(let item in billingInfo) {
            if(billingInfo[item] === initInfo[item] && item !== "address_2") {
                initCheck = false
            }
        }
        // console.log('initcheck', initCheck)
        if(initCheck && !checkBox) {
            setBillingInfoBackup({...billingInfo})
        }
    }, [billingInfo, checkBox])
    return(
        <div>
            <div className="placeOrderInfoItem">
                <label><span>* </span>First Name:</label>
                <input type="text"
                       {...register('bill_first_name', {
                           required: {value: true, message: "First name is required"},
                           pattern: {value: /^[A-Za-z]+$/, message: "Invalid first name type"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, firstName: e.target.value})
                           }
                       })}
                />
                {errors.bill_first_name && <p>{errors.bill_first_name?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Last Name:</label>
                <input type="text"
                       {...register('bill_last_name', {
                           required: {value: true, message: "Last name is required"},
                           pattern: {value: /^[A-Za-z]+$/, message: "Invalid last name type"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, lastName: e.target.value})
                           }
                       })}/>
                {errors.bill_last_name && <p>{errors.bill_last_name?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Address:</label>
                <input type="text"
                       {...register('bill_address', {
                           required: {value: true, message: "Address is required"},
                           // minLength: {value: 1, message: "Address is required"},
                           maxLength: {value: 100, message: "Out of Maximum length"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, address: e.target.value})
                           }
                       })}/>
                {errors.bill_address && <p>{errors.bill_address?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label>Address 2:</label>
                <input type="text" {...register('bill_address_2', {
                    onChange: (e) => {
                        setBillingInfo({...billingInfo, address_2: e.target.value})
                    }
                })} placeholder="Apt, suite, PO Box, tec. (optional)"/>
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>City:</label>
                <input type="text"
                       {...register('bill_city', {
                           required: {value: true, message: "City is required"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, city: e.target.value})
                           }
                       })}/>
                {errors.bill_city && <p>{errors.bill_city?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Province / State:</label>
                <input type="text"
                       {...register('bill_province', {
                           required: {value: true, message: "Province is required"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, province: e.target.value})
                           }
                       })}/>
                {errors.bill_province && <p>{errors.bill_province?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Country:</label>
                <input type="text"
                       {...register('bill_country', {
                           required: {value: true, message: "Country is required"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, country: e.target.value})
                           }
                       })}/>
                {errors.bill_country && <p>{errors.bill_country?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Postal Code / Zip:</label>
                <input type="text"
                       {...register('bill_postcode', {
                           required: {value: true, message: "Postal code is required"},
                           maxLength: {value: 6, message: "Invalid postal code"},
                           minLength: {value: 6, message: "Invalid postal code"},
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, postcode: e.target.value})
                           }
                       })}/>
                {errors.bill_postcode && <p>{errors.bill_postcode?.message}</p>}
            </div>

            <div className="placeOrderInfoItem">
                <label><span>* </span>Phone number:</label>
                <input type="text"
                       {...register('bill_phone', {
                           required: {value: true, message: "Phone number is required"},
                           pattern: {
                               value: /^[1-9]\d{2}-\d{3}-\d{4}/,
                               message: "Invalid phone number, correct type: ###-###-####"
                           },
                           onChange: (e) => {
                               setBillingInfo({...billingInfo, phone: e.target.value})
                           }
                       })}/>
                {errors.bill_phone && <p>{errors.bill_phone?.message}</p>}
            </div>
        </div>
    )
}
export default BillingInfoDetail