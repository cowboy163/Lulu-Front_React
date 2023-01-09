import {useEffect, useState} from "react";
import './ReviewPage.scss'

const ReviewPage4=(props)=>{
    const [enteredName,setEnteredName]=useState('')
    const [enteredEmail,setEnteredEmail]=useState('')
    const nameChangeHandler=(e)=>{
        setEnteredName(e.target.value)
    }
    const emailChangeHandler=(e)=>{
        setEnteredEmail(e.target.value)
    }

    const reviewSubmitSubmitExit=()=>{
        if(localStorage.getItem('enteredName')&&localStorage.getItem('enteredStar')&&localStorage.getItem('enteredTitle')&&localStorage.getItem('enteredReview')&&localStorage.getItem('enteredEmail'))
        { props.submitReview();
        props.reversePopUp();}
    }

    const saveEnteredName=()=>{
        localStorage.setItem('enteredName',enteredName)
    }
    const saveEnteredEmail=()=>{
        localStorage.setItem('enteredEmail',enteredEmail)
    }
    useEffect(()=>{
        const localName=localStorage.getItem('enteredName');
        const localEmail=localStorage.getItem('enteredEmail');

        if(localName){setEnteredName(localName)}
        if(localEmail){setEnteredEmail(localEmail)}
        },[])
    return<div>
        <div className={'reviewQuestionBlock'}>
            <div className={'reviewPageTitle'}>Your Info *Required</div>
            <div className={'reviewQuestionTitle'}>Nickname* (Name displayed; 4–25 characters.)</div>
            <input className={'reviewInput'}
                   onChange={nameChangeHandler}
                   value={enteredName}
                   onBlur={saveEnteredName}
            />
        </div>
        <div className={'reviewQuestionBlock'}>
            <div className={'reviewQuestionTitle'}>Email* (Will not be displayed.)</div>
            <input className={'reviewInput'}
                   onChange={emailChangeHandler}
                   value={enteredEmail}
                   onBlur={saveEnteredEmail}
            />
        </div>
    <button type={'submit'}  className={'reviewBottomBtn'} onClick={reviewSubmitSubmitExit}>Submit</button>
    </div>
}

export default ReviewPage4