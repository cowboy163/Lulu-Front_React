import Rating from '@mui/material/Rating';
import {useEffect, useState} from "react";
import StarIcon from "@mui/icons-material/Star";
import './ReviewPage.scss'



const ReviewPage1=()=>{

    const [starValue,setStarValue]=useState(0);
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredReview,setEnteredReview]=useState('')

    //get input value
const titleChangeHandler=(e)=>{
    setEnteredTitle(e.target.value)
}

const reviewChangeHandler=(e)=>{
setEnteredReview(e.target.value)

}


//save data
const saveEnteredTitle=()=>{
    localStorage.setItem('enteredTitle',enteredTitle)
}
    const saveEnteredReview=()=>{
        localStorage.setItem('enteredReview',enteredReview)
    }
    const saveEnteredStar=()=>{
        localStorage.setItem('enteredStar',starValue.toString())
    }
useEffect(()=>{
    const localStar=+localStorage.getItem('enteredStar');
    const localTitle=localStorage.getItem('enteredTitle');
    const localReview=localStorage.getItem('enteredReview');

    if(localStar){setStarValue(localStar)}
    if(localTitle){setEnteredTitle(localTitle)}
    if(localReview){setEnteredReview(localReview)}},[])
    return<div className={'reviewPageBlock'}>
      <div className={'reviewQuestionBlock'}>
          <div className={'reviewQuestionTitle'}>Your overall rating*</div>
          <Rating
              name="simple-controlled"
              value={starValue}
              size="large" precision={1}
              style={{color:'black'}}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              onBlur={saveEnteredStar}
              onChange={(event, newValue) => {
                  setStarValue(newValue);
              }}
          />
      </div>
        <div className={'reviewQuestionBlock'}>
            <div className={'reviewQuestionTitle'}>Review Title*</div>
            <input placeholder={'E.g."Nice pants'} className={'reviewInput'}
            onChange={titleChangeHandler}
                   value={enteredTitle}
                   onBlur={saveEnteredTitle}
            />
        </div>
        <div className={'reviewQuestionBlock'}>
            <div className={'reviewQuestionTitle'}>Review* (25–500 characters)</div>
            <textarea placeholder={'Tell others...'} className={'reviewInputReview'}
            onChange={reviewChangeHandler}
                   value={enteredReview}
                   onBlur={saveEnteredReview}
            />
        </div>
    </div>
}

export default ReviewPage1

