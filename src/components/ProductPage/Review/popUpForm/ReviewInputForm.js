import ReviewPage1 from "./ReviewPage1";
import ReviewPage2 from "./ReviewPage2";
import ReviewPage3 from "./ReviewPage3";
import ReviewPage4 from "./ReviewPage4";

const ReviewInputForm=(props)=>{


switch (props.page){
    case 1:
        return<ReviewPage1></ReviewPage1>
    case 2:
        return<ReviewPage2></ReviewPage2>
    case 3:
        return<ReviewPage3></ReviewPage3>
    case 4:
        return<ReviewPage4 submitReview={props.submitReview} reversePopUp={props.reversePopUp}></ReviewPage4>
    default:
        return
}
}

export default ReviewInputForm