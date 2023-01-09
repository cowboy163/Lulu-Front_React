import './ReviewCommentBlock.scss'

import Rating from '@mui/material/Rating';
import StarIcon from "@mui/icons-material/Star";


const ReviewCommentBlock=(props)=>{



    return<div className={'reviewItemsDiv'}>
      <div className={'reviewName'}>
          <div className={'reviewNameCircle'}>{props.item.name.slice(0,1).toUpperCase()}</div>
          <div className={'reviewNameName'}>{`${props.item.name[0].toUpperCase()}${props.item.name.slice(1)}`}</div>
      </div>
        <Rating name="half-rating-read" value={props.item.star} size="small" precision={0.5} style={{color:'black'}} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>

        <div className={'reviewItemsTitle'}>{props.item.title}</div>
        <div className={'reviewItemsComment'}>{props.item.comment}</div>
        {props.item.fits&& <div>
            <span>Fits:</span>
            <span style={{fontSize:'15px',color:'grey'}}>{props.item.fits}</span>
            </div>}
        {/*{props.item.img&&<img className={'reviewImgInBlock'} src={props.item.img} alt=''/>}*/}
        {props.item.img&&<img className={'reviewImgInBlock'} src={props.item.img} alt={''}/>}




    </div>
}

export default ReviewCommentBlock