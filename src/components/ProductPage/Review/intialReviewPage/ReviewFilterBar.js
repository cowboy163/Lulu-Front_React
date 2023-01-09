import './ReviewFilterBar.scss'
import {useSelector} from "react-redux";
import CheckRow2 from "./CheckRow2";

const ReviewFilterBar=()=>{
const reviewCheckInfo=useSelector(state=>state.reviewReducer.reviewCheckInfo)
    const reviewImgFilter=useSelector(state=>state.reviewReducer.reviewImgFilter)


    return<div className={'reviewFilterBar'}>
        <div className={'filterReviewsTitle'}>Filter Reviews</div>
        <input className={'reviewInputSearch'}></input>
        <div>
            <div className={'reviewStarFilter'}>
            {reviewCheckInfo&&reviewCheckInfo.map((item)=><CheckRow2 item={item} key={item.name} starNumber={item.number} filterType={'star'}/>)}
            </div>
            <hr className={'sizeFilterHr2'}/>
        </div>
        <div>
            <div className={'reviewStarFilter'}>
                {reviewImgFilter&&reviewImgFilter.map((item)=><CheckRow2 item={item} key={item.name} filterType={'img'}/>)}
            </div>

        </div>

    </div>
}

export default ReviewFilterBar