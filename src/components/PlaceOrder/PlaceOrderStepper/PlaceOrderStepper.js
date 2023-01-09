import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceOrderInfo from "../PlaceOrderInfo/PlaceOrderInfo";
import OrderPlaced from "../OrderPlaced/OrderPlaced";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import OrderSummary from "../../Checkout/OrderSummary/OrderSummary";
import SelectPayMethod from "../SelectPayMethod/SelectPayMethod";
import {PaymentWithoutButton} from "../../Payment/PaymentWithoutButton";
import {paymentReset} from "../../../actions/paymentActions";
import {useNavigate} from "react-router-dom";
import {cleanBag} from "../../../actions/bagActions";
import {changeCanPayStatus} from "../../../actions/checkoutActions";
import PopOutMessage from "../../Checkout/PopOutMessage/PopOutMessage";
import PaymentButtonOutside from "../../payment-form/PaymentButtonOutside";
// const steps = ['Place Order', 'Confirm Order', 'Order Completed'];


const PlaceOrderStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formState, setFormState] = useState(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // popout window
    const [popOutMessage, setPopOutMessage] = useState(false)
    const [popOutText, setPopOutText] = useState('')
    // const [popOutNavigate, setPopOutNavigate] = useState(undefined)
    const closePopOutWindow = () => {
        setPopOutMessage(false)
    }
    const paymentStatus = useSelector(state => state?.paymentReducers.payment_success)
    useEffect(() => {
        if(paymentStatus && activeStep === 2) {
            setPopOutMessage(true)
            setPopOutText('Payment Success')
            dispatch(cleanBag())
            dispatch(paymentReset())
            dispatch(changeCanPayStatus(false))
        }
    }, [paymentStatus, activeStep, dispatch])

    // button text
    const [buttonText, setButtonText] = useState('next')
    useEffect(() => {
        switch (activeStep) {
            case 0:
                setButtonText('NEXT')
                break
            case 1:
                setButtonText('PAY')
                break
            case 2:
                setButtonText('HOME')
                break
            default:
                break
        }
    }, [buttonText, activeStep])

    // after success pay
    // const payment_success = useSelector(state => state?.paymentReducers?.payment_success)
    // useEffect(() => {
    //     if (payment_success) {
    //         setPopOutMessage(true)
    //         setPopOutText('Payment Success')
    //         setPopOutNavigate('/')
    //         dispatch(cleanBag())
    //         dispatch(paymentReset())
    //         dispatch(changeCanPayStatus(false))
    //     }
    // }, [payment_success, navigate, dispatch])



    const paymentMethod = useSelector(state => state?.placeOrderReducers?.paymentMethod)
    const paymentComplete = useSelector(state => state?.paymentReducers?.payment_success)

    // useEffect(() => {
    //     console.log('payment method check', paymentMethod)
    // }, [paymentMethod])

    // const order = useSelector(state => state?.placeOrderReducers?.order)
    // const payment = useSelector(state => state?.placeOrderReducers?.payment)
    // const checkbox = useSelector(state => state?.placeOrderReducers?.checkBox)

    const getFormState = (formState) => {
        setFormState(formState)
    }

    useEffect(() => {
        paymentComplete && setActiveStep(2)
    }, [paymentComplete])

    const steps = [
        {
            name: 'Place Order',
            component: <PlaceOrderInfo getFormState={getFormState}/>
        },
        {
            name: 'Order Confirmation',
            // component: <OrderConfirm/>
            component: <OrderSummary/>
        },
        {
            name: 'Order Placed',
            component: <OrderPlaced/>
        }
    ]
    // const [skipped, setSkipped] = React.useState(new Set());

    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    // const isStepSkipped = (step) => {
    //     return skipped.has(step);
    // };


    // useEffect(() => {
    //     console.log('step check', activeStep)
    // }, [activeStep])

    // useEffect(() => {
    //     console.log('formState check', formState)
    // }, [formState])

    // const allowNext = useSelector(state => state?.placeOrderReducers.allowNext)
    const handleNext = () => {
        // let newSkipped = skipped;
        // if (isStepSkipped(activeStep)) {
        //     newSkipped = new Set(newSkipped.values());
        //     newSkipped.delete(activeStep);
        // }
        switch (activeStep) {
            case 0:
                setTimeout(() => {
                    formState && setActiveStep((prevActiveStep) => prevActiveStep + 1);
                }, 500)
                break
            case 1:
                // dispatch(paymentSuccess(order, payment, checkbox, paymentMethod))
                // paypal.click()
                // setActiveStep((prevActiveStep) => prevActiveStep + 1);
                break
            case 2:
                navigate('/')
                break
            default:
                break
        }
        // console.log('step check', activeStep, steps.length - 1)
        // if(activeStep < steps.length - 1) {
        //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // }

        // setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepOptional(activeStep)) {
    // You probably want to guard against something like this,
    // it should never occur unless someone's actively trying to break something.
    // throw new Error("You can't skip a step that isn't optional.");
    // }

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //     const newSkipped = new Set(prevSkipped.values());
    //     newSkipped.add(activeStep);
    //     return newSkipped;
    // });
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    return (
        <Box sx={{width: '100%'}}
             style={{
                 marginTop: "2rem",
                 paddingBottom: "2rem"
             }}
        >

            {
                popOutMessage && <PopOutMessage closePopOutWindow={closePopOutWindow}
                                                // location={popOutNavigate}
                >{popOutText}</PopOutMessage>
            }

            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography variant="caption">Optional</Typography>
                    //     );
                    // }
                    // if (isStepSkipped(index)) {
                    //     stepProps.completed = false;
                    // }
                    return (
                        <Step key={index} {...stepProps}>
                            <StepLabel {...labelProps}>{label.name}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div className="stepArea"
                 style={{
                     width: "50%",
                     margin: "5rem auto"
                 }}
            >
                {
                    //         activeStep === steps.length ? (
                    //     <React.Fragment>
                    //         <Typography sx={{ mt: 2, mb: 1 }}>
                    //             All steps completed - you&apos;re finished
                    //         </Typography>
                    //         <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    //             <Box sx={{ flex: '1 1 auto' }} />
                    //             <Button onClick={handleReset}
                    //                     variant="contained"
                    //                     color="error"
                    //             >Reset</Button>
                    //         </Box>
                    //     </React.Fragment>
                    // ) :
                    (
                        <React.Fragment>
                            <Typography sx={{mt: 2, mb: 1}}>

                                {steps[activeStep].component}

                            </Typography>

                            {
                                activeStep === 1 && <div className="selectPayMethodArea">
                                    <SelectPayMethod/>
                                </div>
                            }

                            <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                {
                                    activeStep < 2 &&                                 <Button
                                        // color="inherit"
                                        color="error"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{mr: 1}}
                                        variant="contained"
                                    >
                                        Back
                                    </Button>
                                }

                                <Box sx={{flex: '1 1 auto'}}/>
                                {/*{isStepOptional(activeStep) && (*/}
                                {/*    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>*/}
                                {/*        Skip*/}
                                {/*    </Button>*/}
                                {/*)}*/}

                                <Button onClick={handleNext}
                                        style={{position: "relative"}}
                                        variant="contained"
                                        color="error"
                                        type={activeStep === 0 ? "submit" : ""}
                                        form={activeStep === 0 ? "place-order-form" : ""}
                                >
                                    {
                                        (activeStep === 1) && <div className="paymentBtn"
                                                                 style={{
                                                                     position: "absolute",
                                                                 }}
                                        >
                                            <div className="paymentFormArea">
                                                {
                                                    paymentMethod === '1'? <PaymentWithoutButton /> : <PaymentButtonOutside/>
                                                }
                                            </div>
                                        </div>
                                    }

                                    {/*{activeStep === steps.length - 2 ? 'Pay' : 'Next'}*/}
                                    {buttonText}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
            </div>

        </Box>
    )
}

export default PlaceOrderStepper