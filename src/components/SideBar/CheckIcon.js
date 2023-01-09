import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DoneIcon from '@mui/icons-material/Done';
import './CheckIcon.scss';

export const CheckIcon=({checked,...rest})=>{

   return <div {...rest} style={{display:"block",}}>
   {checked?<CheckBoxIcon />:<DoneIcon className={'checkBoxHover'} />}
   </div>
}