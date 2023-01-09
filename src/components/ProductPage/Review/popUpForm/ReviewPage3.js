import './ReviewPage.scss'
import {useState} from "react";

const ReviewPage3=()=>{

    const [reviewImgLocation,setImgReviewLocation]=useState('')
const setReviewImg=(e)=>{
        console.log(e.target.value)
    setImgReviewLocation(e.target.value)
}
const saveReviewImg=()=>{
        localStorage.setItem('reviewImg',reviewImgLocation)
}


    return<div>
       <input onChange={setReviewImg} onBlur={saveReviewImg} type={'file'} id={"inputImg"} style={{display:''}}/>
    </div>
}

export default ReviewPage3