import {ColorBlock} from "./ColorBlock";
import './ColorFilterBlock.scss';
import AddIcon from "@mui/icons-material/Add";
import actions from "../../actions";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import {useDispatch, useSelector} from "react-redux";
import './SideBarGlobal.scss'
import {ShowFilterButton} from "./ShowFilterButton";

export const ColorFilterBlock=(props)=>{
    const dispatch=useDispatch();
    const isShown=useSelector(state => state.sideBarReducer.isShownList[props.filterType]);
    const filterTitle = props.filterType.trim().toLowerCase().replace(props.filterType[0], props.filterType[0].toUpperCase());
    return<>
        <hr/>
        <div className={'colorFilterBlock'}>
            <div className={'filterTitleShownBar'}>
                <div className={'filterTitle'}>{filterTitle}</div>
                <ShowFilterButton filterIsShown={isShown} onClick={()=>{dispatch(actions.showFilter(props.filterType));console.log('hide click')}}/>
            </div>
            <div className={'colorFilterBlockItems'}>
                {
                    isShown&&props.filterArray.map((item,index)=><ColorBlock item={item} key={item.alt} id={index} filterType={props.filterType}/>)
                }
                {/*<div>*/}
                {/*    {*/}
                {/*        isFolded&&props.filterArray.length>4&&<AddIcon onClick={()=>{dispatch(actions.foldFilter(props.filterType));console.log('showmore click')}}/>*/}
                {/*    }*/}
                {/*    {*/}
                {/*        !isFolded&&props.filterArray.length>4&&<HorizontalRuleIcon onClick={()=>{dispatch(actions.foldFilter(props.filterType));console.log('showmore click')}}/>*/}
                {/*    }*/}
                {/*</div>*/}

            </div>


        </div>
    </>
}