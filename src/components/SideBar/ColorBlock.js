import './ColorBlock.scss'
import {useDispatch} from "react-redux";
import actions from "../../actions";

export const ColorBlock=(props)=>{
    const dispatch=useDispatch();

    return<div className={'colorBlock'}>
        <div className={'colorItem'} onClick={()=>dispatch(actions.selectedColor(props))}>
            <img className={props.item.isChecked?'colorItemFilterImg checkedColor':'colorItemFilterImg'} src={props.item.swatch} alt={""}/>
            <div className={'colorItemName'}>{props.item.alt}</div>
        </div>

    </div>
}