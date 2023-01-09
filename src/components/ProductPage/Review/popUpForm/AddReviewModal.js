import './AddReviewModal.scss'
import ReviewInputForm from "./ReviewInputForm";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addReviewToBackend} from "../../../../actions/reviewAction";
import CloseIcon from '@mui/icons-material/Close';



const AddReviewModal=(props)=>{
    const dispatch=useDispatch();
    const[pageNumber,setPageNumber]=useState(1)
    const pageChange=(a)=>{
        setPageNumber(a)
    }

// const saveCurrentData=()=>{}
    // let  reviewImageUrl = useSelector(state=>state?.reviewReducer.reviewItem).images[0]?.mainCarousel.media.split("|").map(url => url.trim())[0]
    // console.log(reviewImageUrl)

const submitReview=()=>{
        let localName=localStorage.getItem('enteredName')
    let localStar=+localStorage.getItem('enteredStar');
    let localTitle=localStorage.getItem('enteredTitle');
    let localReview=localStorage.getItem('enteredReview');
    let localGear = localStorage.getItem('gearType');
    let localEmail = localStorage.getItem('enteredEmail');
    let localImg = localStorage.getItem('reviewImg')

if(localName&&localStar&&localTitle&&localReview&&localEmail) {

    let newReviewInfos = {
        name: localName,
        star: localStar,
        title: localTitle,
        comment: localReview,
        fits: localGear,
        img: localImg,

    }
    console.log(newReviewInfos)
    dispatch(addReviewToBackend(newReviewInfos))
    }
    cleanLocal()
    }

const cleanLocal =()=>{
    localStorage.removeItem('enteredStar');
    localStorage.removeItem('enteredTitle');
    localStorage.removeItem('enteredReview');
    localStorage.removeItem('enteredName');
    localStorage.removeItem('bodyType');
    localStorage.removeItem('exerciseType');
    localStorage.removeItem('gearType');
    localStorage.removeItem('enteredEmail')
    localStorage.removeItem('reviewImg')

}

const btnArray=['Feedback','Size & Fit','Photo','Info']



    return<div className={'greyBackground'} onClick={props.reversePopUp}>
      <div className={'reviewModal'} onClick={props.reversePopUp}>
          <img className={'reviewImage'} src={props.reviewImageUrl} alt=""/>
          <div className={'reviewPopupRight'}>
                  <div className={'reviewPopUpHeader'}>{`Write a review for ${props.name}`}</div>
                  <div>
                      {btnArray.map((item,index)=><button key={index} style={{color:`${pageNumber===(index+1)?'black':'lightgrey'}`}} className={'reviewMediumBtn'} onClick={()=>{pageChange(index+1)}}>{item}</button>)}
                  </div>
                  <ReviewInputForm page={pageNumber} submitReview={submitReview} reversePopUp={props.reversePopUp}></ReviewInputForm>



              {pageNumber!==4&&<button onClick={()=>pageNumber<4&&pageChange(state=>state+1)} className={'reviewBottomBtn'} >Next Page</button>}
              {pageNumber!==1&&<button onClick={()=>pageNumber>1&&pageChange(state=>state-1)} className={'reviewBottomBtnBack'} >Edit previous step</button>}
          </div>
          <CloseIcon className={'exitReview'} onClick={props.reversePopUp}>exit</CloseIcon>
      </div>
    </div>
}

export default AddReviewModal