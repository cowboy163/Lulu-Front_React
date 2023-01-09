import {useDispatch, useSelector} from "react-redux";
import {SizeBlock} from "./SizeBlock";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import actions from "../../actions";
import'./SizeFilterBlock.scss'
import {ShowFilterButton} from "./ShowFilterButton";




export const SizeFilterBlock=(props)=>{
const dispatch=useDispatch();
let isShown=useSelector(state => state.sideBarReducer.isShownList[props.filterType]);
    const filterTitle = props.filterType.trim().toLowerCase().replace(props.filterType[0], props.filterType[0].toUpperCase());

    return<>
        <hr/>
        <div className={'sizeFilterBlock'}>
            <div className={'sizeFilterBlockItems'}>
                <div className={'filterTitleShownBar'}>
                    <div className={'filterTitle'}>{filterTitle}</div>
                    <ShowFilterButton filterIsShown={isShown} onClick={()=>{dispatch(actions.showFilter(props.filterType));console.log('hide click')}}/>
                </div>
                {
                    isShown&&props.filterArray.map((item,index)=><SizeBlock item={item} key={index} id={index} filterType={props.filterType}/>)
                }

            </div>

        </div>
    </>

    // <>
    //     <hr/>
    //     <div className={'colorFilterBlock'}>
    //         <div className={'colorFilterBlockItems'}>
    //             <div className={'filterTitleShownBar'}>
    //                 <div className={'filterTitle'}>{filterTitle}</div>
    //                 <HorizontalRuleIcon onClick={()=>{dispatch(actions.showFilter(props.filterType));console.log('hide click')}}/>
    //             </div>
    //
    //         </div>
    //
    //
    //     </div>
    // </>

}