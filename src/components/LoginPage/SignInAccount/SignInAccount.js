import './SignInAccount.scss'
import {useEffect, useState} from "react";
import {accountLogin, emailValidation, passwordValidation} from "../../../js/utils";
import {useDispatch, useSelector} from "react-redux";
import {recordLogin} from "../../../actions/checkoutActions";
import PopOutMessage from "../../Checkout/PopOutMessage/PopOutMessage";

const SignInAccount = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailFormat, setEmailFormat] = useState('true')
    const [passwordFormat, setPasswordFormat] = useState('true')

    // sign in status
    const [popOutMessage, setPopOutMessage] = useState(false)
    const [popOutText, setPopOutText] = useState('')
    const [popOutNavigate, setPopOutNavigate] = useState(undefined)
    const closePopOutWindow = () => {
        setPopOutMessage(false)
    }


    const userData = useSelector(state => state?.checkoutReducers?.user_data)
    // sign in button activate check
    const [canSignIn, setCanSignIn] = useState(false)
    useEffect(() => {
        email && setEmailFormat(emailValidation(email))
        password && setPasswordFormat(passwordValidation(password))
        setCanSignIn(emailFormat === 'true' && passwordFormat === 'true' && email !== '' && password !== '')
    }, [emailFormat, passwordFormat, email, password])

    const handleSignInClick = () => {
        canSignIn && accountLogin(email, password)
            .then(res => {
                dispatch(recordLogin(res.data.data))
                setPopOutMessage(true)
                setPopOutText('Login Success')
                setPopOutNavigate('/')
            })
            .catch(err=>{
                console.log('login error ===>', err)
                let message = err?.response?.data?.message.split('/')[0].trim()
                setPopOutMessage(true)
                setPopOutText(message)
            })
    }

    useEffect(() => {
        if (userData) {
            setEmail(userData.user.email)
        }
    }, [userData])


    // test
    useEffect(() => {
        console.log('canSignIn test ===>', canSignIn)
    },[canSignIn])

    return(
        <div className='signInAccountComponent'>
            {
                popOutMessage && <PopOutMessage closePopOutWindow={closePopOutWindow}
                                                location={popOutNavigate}
                >{popOutText}</PopOutMessage>
            }
            <div className="signInMain">
                <h1 className="signInTitle underlineDec">
                    Sign in to your member account
                </h1>
                <div className="emailAddress">
                    <p>Email address</p>
                    <input type="email"
                           onChange={e => {setEmail(e.target.value)}}
                           value={email}
                           onBlur={() => {setEmailFormat(emailValidation(email))}}
                           style={{
                               border:emailFormat !== 'true'? '0.0625rem solid #d22030' : '.0625rem solid #000',
                           }}
                    />
                    {
                        emailFormat !== 'true' && <p className='warning'>{emailFormat}</p>
                    }
                </div>
                <div className='password'>
                    <p>Password</p>
                    <input type="password"
                           onChange={e => {setPassword(e.target.value)}}
                           value={password}
                           onBlur={() => {setPasswordFormat(passwordValidation(password))}}
                           style={{
                               border:passwordFormat !== 'true'? '0.0625rem solid #d22030' : '.0625rem solid #000',
                           }}
                    />
                    {
                        passwordFormat !== 'true' && <p className='warning'>{passwordFormat}</p>
                    }
                </div>
                <p className='forgot'>Forgot your password?</p>
                <button className="signIn"
                        style={{
                            backgroundColor: canSignIn? '#000':'#bfbfbf',
                            cursor: canSignIn? 'pointer' : 'not-allowed',
                        }}
                        onClick={() => {handleSignInClick()}}
                >
                    sign in to your member account
                </button>
                <p className="createAccount">Create a member account</p>
            </div>
        </div>
    )
}

export default SignInAccount