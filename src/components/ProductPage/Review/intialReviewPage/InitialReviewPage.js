import './InitialReviewPage.scss'
import ReviewFilterBar from "./ReviewFilterBar";
import ReviewComments from "./ReviewComments";
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {updateDummyBackend} from "../../../../actions/reviewAction";
import RectangleIcon from '@mui/icons-material/Rectangle';

const InitialReviewPage =(props)=>{
    const dispatch=useDispatch();



let dummyStarArray = useSelector(state=>state.reviewReducer.dummyReviews);
const dummyDefault = useSelector(state=>state.reviewReducer.dummyReviewsDefault);
const reviewFilterState = useSelector(state=>state.reviewReducer.reviewCheckInfo);
const reviewImgFilterState = useSelector(state=>state.reviewReducer.reviewImgFilter)
    const gearFitArray = useSelector(state=>state.reviewReducer.reviewForm.gearFit)


    const [sortType,setSortType]=useState('Default')


//get average score
    let starNumber=0;
    dummyDefault.forEach(item=>{starNumber+=item.star});

    starNumber= +((starNumber/dummyDefault.length).toFixed(1));

    let gearGuideNumber=0;
    let gearLength=0;
    dummyDefault.forEach(item=>{
        if(item.fits){
            switch (item.fits){
                case gearFitArray[0]:
                    gearGuideNumber+=1;
                    break;
                case gearFitArray[1]:
                    gearGuideNumber+=2;
                    break;
                case gearFitArray[2]:
                    gearGuideNumber+=3;
                    break;
                case gearFitArray[3]:
                    gearGuideNumber+=4;
                    break;
                    // console.log(gearGuideNumber)
                case gearFitArray[4]:
                    gearGuideNumber+=5;
                    break;
                default:
                    return
            }
            gearLength+=1;
        }
    })

    // console.log(gearGuideNumber,gearLength)


    gearGuideNumber= +((gearGuideNumber/gearLength).toFixed(1))

    // console.log(starNumber);

// sort
    let useUpdatedDummyArray=[...dummyDefault]
    const updateReviewOrder1 = ()=> {
      setSortType('Default')
        dispatch(updateDummyBackend(useUpdatedDummyArray));
    }
    const updateReviewOrder2 = ()=> {
       setSortType('Highest to Lowest Rating')
        useUpdatedDummyArray.sort((a, b) => b.star - a.star)
        // console.log(useUpdatedDummyArray)
        dispatch(updateDummyBackend(useUpdatedDummyArray))
    }

    const updateReviewOrder3 = ()=> {
        setSortType('Lowest to Highest Rating')
        useUpdatedDummyArray.sort((a, b) => a.star - b.star)
        // console.log(useUpdatedDummyArray)
        dispatch(updateDummyBackend(useUpdatedDummyArray))
    }

// get checked filters:
    let updatedStarArray=[]
    reviewFilterState.forEach(item=>{item.isChecked && updatedStarArray.push(item.number)});
    // console.log(updatedStarArray)

    let updatedDummyArray=[]
    let updatedDummyByFilterStar=[]
    // console.log(reviewImgFilterState[0].isChecked)
 updatedStarArray.length===0||dummyStarArray.forEach(item=>{updatedStarArray.includes(item.star)&&updatedDummyByFilterStar.push(item)});

    updatedStarArray.length===0&& (updatedDummyByFilterStar=dummyStarArray);
    updatedDummyByFilterStar.forEach(item=>{
        if(reviewImgFilterState[0].isChecked){
            item.img&&updatedDummyArray.push(item)
        }else{
            updatedDummyArray=updatedDummyByFilterStar
        }


    })





    const [sortReview,setSortReview]=useState(false);

    const changeSortReview=()=>{
        !sortReview&&setSortReview(true)
    }
    const closeSortReview=()=>{
        sortReview&&setSortReview(!sortReview)
    }

    return <div onClick={closeSortReview}>
        <div  className={'initialReviewPage'}>
        <div className={'reviewTitle'}>
            Reviews
        </div>

        <div>
                <div className={'reviewStar'}>
                    <div style={{fontSize:'27px', fontWeight:'bolder',display:'inline'}}>{starNumber.toFixed(1)}</div>
                    <Rating name="half-rating-read" value={starNumber} size="small" precision={0.5} style={{color:'black'}} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}/>
                </div>
                <div>{`Based on ${dummyDefault.length} Reviews`}</div>

        </div>

        <div className={'reviewSize'}>
            <div className={'reviewSize'}>
                <div style={{fontSize:'20px', fontWeight:'bolder',marginBottom:'5px'}}>Fits true to size</div>
                <div style={{display:'flex',alignItems:'center'}}>
                <div>smaller</div><div style={{height:'9px',overflow:'hidden'}}>
                    {gearFitArray.map((item,index)=><RectangleIcon key={index} style={{color:`${gearGuideNumber.toFixed(0)===`${index+1}`?'black':'lightgrey'}`}}></RectangleIcon>)}
                </div>
                <div>larger</div>
                </div>
            </div>

        </div>

        <button className={'reviewBtn'} onClick={props.reversePopUp}>write review</button>
        </div>
        <div className={'reviewsPart'}>
            <ReviewFilterBar></ReviewFilterBar>
            <div className={'sortingAndReviews'}>
            <div className={'sortingAndReviewsTop'}>
                <div>{`Showing ${updatedDummyArray.length} of ${dummyDefault.length} results`}</div>
                <div className={'reviewSortSelect'}>
                    <div className={'reviewSortTitleBlock'}>
                      <span>Sort by: </span>
                      <span onClick={changeSortReview} >{sortType}</span>

                   </div>
                    {sortReview&&
                        <div className={'reviewList'} style={{zIndex:'999',background:'white'} }  onClick={changeSortReview}>
                            <div className={'reviewListItems'} onClick={updateReviewOrder1} >Default</div>
                            <div className={'reviewListItems'} onClick={updateReviewOrder2}>Highest to Lowest Rating</div>
                            <div className={'reviewListItems'} onClick={updateReviewOrder3}>Lowest to Highest Rating</div>

                        </div>
                    }
                </div>
            </div>
            <ReviewComments reviewArray={updatedDummyArray}></ReviewComments>
            </div>
        </div>
    </div>
}

export default InitialReviewPage