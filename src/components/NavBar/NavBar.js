import UpperNav from "./UpperNav/UpperNav";
import MiddleNav from "./MiddleNav/MiddleNav";
import BottomNav from "./BottomNav/BottomNav";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNavData, unhoverData} from "../../actions/navBarActions";
import Mask from "./Mask/Mask";
import './NavBar.scss'

const NavBar = () => {
    const dispatch = useDispatch()
    const navBarData = useSelector(state => state?.navBarReducers.navBarData)
    const showMask = useSelector(state => state?.navBarReducers.showMask)
    // const showMask = true
    const maskData = useSelector(state => state?.navBarReducers.maskData)
    useEffect(() => {
        dispatch(fetchNavData())
    }, [dispatch])
    const handleMouseLeave = () => {
        dispatch(unhoverData())
    }
    const [fly, setFly] = useState(false)
    const [height, setHeight] = useState(0)
    const [pullDown, setPullDown] = useState(false)
    const getHeight = height => {
        // console.log('this is the height in bav bar',height)
        setHeight(height)
        window.addEventListener('scroll',() => {
            if(document.documentElement.scrollTop > height) {
                setFly(true)
            } else {
                setFly(false)
            }
        })
    }
    return (
        <div>
            {
                showMask? <Mask {...maskData}/> : <Mask/>
            }
            {
                pullDown && <Mask opacity={0.5} zIndex={5}/>
            }
            <div onMouseLeave={() => {
                handleMouseLeave()
            }}
                 className="navBar">
                <UpperNav value={getHeight} setPullDown={setPullDown}/>
                <div className='middle_and_bottom'>
                    <MiddleNav value={navBarData}
                               isFly={fly}
                               topBarHeight={height}
                    />
                    <BottomNav isFly={fly}
                               topBarHeight={height}
                    />
                </div>

            </div>


        </div>
    )
}
export default NavBar