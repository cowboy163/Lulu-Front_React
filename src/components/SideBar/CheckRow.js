import {CheckIcon} from "./CheckIcon";
import {useDispatch} from "react-redux";
import actions from "../../actions";
import './CheckRow.scss'
// import {fetchImageReal} from "../../actions/productAction";


const CheckRow=(props)=>{
const dispatch=useDispatch();
const handleClick = () => {
    // console.log('what is props',props)
    dispatch(actions.selectedFilter(props))
    // dispatch(fetchImageReal())
}

    return<div>
<div className={'checkRow'}>
   <CheckIcon checked={props.item.isChecked} onClick={()=> handleClick()}/>
    <div className={'filterItemName'}>{props.item.name}</div>
    </div>

    </div>
}

export default CheckRow