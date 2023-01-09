import ReviewCommentBlock from "./ReviewCommentBlock";
import './ReviewComments.scss'

const ReviewComments =(props)=>{

    return<div className={'reviewCommentsWrapper'} >

        {props.reviewArray.length>0&&props.reviewArray.map((item,index)=><ReviewCommentBlock item={item} key={item.name} id={index}/>)}
    </div>
}


export default ReviewComments