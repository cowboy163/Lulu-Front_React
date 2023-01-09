import {CheckIcon} from "../../../SideBar/CheckIcon";
import {useDispatch} from "react-redux";
import '../../../SideBar/CheckRow.scss'
// import {fetchImageReal} from "../../actions/productAction";
import {reviewSelectedFilter,reviewImgFilter} from "../../../../actions/reviewAction";


const CheckRow2=(props)=>{
    const dispatch=useDispatch();
    const handleClick = () => {
        // console.log('what is props',props)
        props.filterType==='star'&&dispatch(reviewSelectedFilter(props))
        props.filterType==='img'&&dispatch(reviewImgFilter(props))
        // dispatch(fetchImageReal())
    }

    return<div>
        <div className={'checkRow'}>
            <CheckIcon checked={props.item.isChecked} onClick={()=> handleClick()}/>
            <div className={'filterItemName'}>{props.item.name}</div>
        </div>

    </div>
}

export default CheckRow2