import './PopOutMessage.scss'
import Mask from "../../NavBar/Mask/Mask";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const PopOutMessage = ({children, closePopOutWindow, location}) => {
    const navigate = useNavigate()
    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden'
        return(() => {
            document.querySelector('body').style.overflow = 'visible'
        })
    }, [])
    return(
        <div className='popOutMessage'>
            <Mask opacity={0.5} zIndex={4}/>
            <div className="popOutMain">
                <h2 className='popOutText'>
                    {children}
                </h2>
                <button className="popOutBtn"
                        onClick={() => {
                            location && navigate(location)
                            closePopOutWindow()
                        }}
                >confirm</button>
            </div>
        </div>
    )
}

export default PopOutMessage