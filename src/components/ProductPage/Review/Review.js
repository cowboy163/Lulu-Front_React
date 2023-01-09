import {useEffect, useState} from "react";
import AddReviewModal from "./popUpForm/AddReviewModal";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../../actions";
import InitialReviewPage from "./intialReviewPage/InitialReviewPage";
import './Review.scss'


const Review= () => {
    const dispatch=useDispatch();

    // let  reviewImageUrl = useSelector(state=>state.reviewReducer.reviewItem)
     const[popUpReview,setPopUpReview]=useState(false);
     const reversePopUp=()=>{
         setPopUpReview(state=>!state)
     }

    let  reviewImageUrlArray = useSelector(state=>state?.reviewReducer.reviewItem)
    // console.log(reviewImageUrlArray)

 let reviewImageUrl= reviewImageUrlArray.images?(reviewImageUrlArray.images[0]?.mainCarousel.media.split("|").map(url => url.trim())[0]):'';
let reviewProductName=reviewImageUrlArray.name? reviewImageUrlArray.name:'';






         useEffect(
             ()=>{dispatch(actions.fetchReviewAll())
             // console.log(reviewImageUrlArray)
             }
             ,[dispatch])
    return(
        <div className={'reviewGlobal'}>
            {popUpReview&&<AddReviewModal  reviewImageUrl={reviewImageUrl} name={reviewProductName} reversePopUp={reversePopUp}/>}
            <InitialReviewPage reversePopUp={reversePopUp}/>
        </div>
    )
}
export default Review