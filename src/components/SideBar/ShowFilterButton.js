import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import actions from "../../actions";
import './ShowFilterButton.scss'



export const ShowFilterButton=({filterIsShown,...rest})=>{


    return<div {...rest} style={{position:'relative', display:'flex'}}>

           {!filterIsShown&&<HorizontalRuleIcon className={'showCrossButton1'}/>}
           {filterIsShown&&<HorizontalRuleIcon className={'showCrossButton2'}/>}
        <HorizontalRuleIcon />
    </div>
}