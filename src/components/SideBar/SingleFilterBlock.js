import CheckRow from "./CheckRow";
import './SingerFilterBlock.scss'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
import {useSelector,useDispatch} from "react-redux";
import actions from "../../actions";
import './SideBarGlobal.scss'
import {ShowFilterButton} from "./ShowFilterButton";

export const SingleFilterBlock=(props)=>{
    const dispatch=useDispatch();
const isFolded=useSelector(state => state.sideBarReducer.isFoldedList[props.filterType]);
const isShown=useSelector(state => state.sideBarReducer.isShownList[props.filterType]);
const filterTitle = props.filterType//.trim().toLowerCase().replace(props.filterType[0], props.filterType[0].toUpperCase());

    return<>
        <hr/>
        <div className={'singleFilterBlock'}>

            <div>
                <div className={'filterTitleShownBar'}>
                    <div className={'filterTitle'}>{filterTitle}</div>
                    <ShowFilterButton filterIsShown={isShown} onClick={()=>{dispatch(actions.showFilter(props.filterType));console.log('hide click')}}/>
                    {/*<div style={{position:'relative', display:'flex'}}>*/}

                    {/*    <HorizontalRuleIcon style={{position:'absolute', transform:'rotate(90deg)'}}/>*/}
                    {/*    <HorizontalRuleIcon onClick={()=>{dispatch(actions.showFilter(props.filterType));console.log('hide click')}}/>*/}
                    {/*</div>*/}
                </div>

                {
                    isShown&&isFolded&&props.filterArray.slice(0,5).map((item,index)=><CheckRow item={item} key={item.name} id={index} filterType={props.filterType}/>)
                }
                {
                    isShown&&!isFolded&&props.filterArray.map((item,index)=><CheckRow item={item} key={item.name} id={index} filterType={props.filterType}/>)
                }
                <div>
                    {
                        isShown&&isFolded&&props.filterArray.length>4&&<AddIcon onClick={()=>{dispatch(actions.foldFilter(props.filterType));console.log('showmore click')}}/>
                    }
                    {
                        isShown&&!isFolded&&props.filterArray.length>4&&<HorizontalRuleIcon onClick={()=>{dispatch(actions.foldFilter(props.filterType));console.log('showmore click')}}/>
                    }
                </div>

            </div>


        </div>
    </>

}