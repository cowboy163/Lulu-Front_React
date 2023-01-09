import './PullDownMenu.scss'
import {useDispatch} from "react-redux";
import {userLogout} from "../../../../actions/checkoutActions";

const PullDownMenu = ({setPullDownMenu, setPullDown}) => {
    const dispatch = useDispatch()

    return(
        <div className='pullDownMenu'>
            <div className="pullDownMenuMain">
                <div className="signOut"
                     onMouseLeave={() => {
                         setPullDownMenu(false)
                         setPullDown(false)
                     }}
                     onClick={() => {
                         dispatch(userLogout())
                         setPullDownMenu(false)
                         setPullDown(false)
                     }}
                >Sign Out</div>
            </div>
        </div>
    )
}

export default PullDownMenu