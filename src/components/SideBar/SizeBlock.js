import './SizeBlock.scss'
import actions from "../../actions";
import {useDispatch} from "react-redux";

export const SizeBlock=(props)=>{
    const dispatch=useDispatch();
    return<div>
        {
            props.item.name!=="sizeDivider"&& <div onClick={()=>dispatch(actions.selectedFilter(props))} className={props.item.isChecked?'sizeBlockDark sizeBlock':'sizeBlock'}>{props.item.name}</div>
        }
        {
            props.item.name==="sizeDivider"&&<div className={'sizeFilterLineDiv'}><hr className={'sizeFilterHr'}/></div>
        }

    </div>
}