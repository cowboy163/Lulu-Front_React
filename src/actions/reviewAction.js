import {reviewAPI, reviewActionType} from "../helper";
import axios from "axios";

export const fetchReviewAll=()=>dispatch=>{

    axios.get(reviewAPI)
        .then(res=>{
            // console.log(res)
            // console.log("data returned", res.data.rs)

            dispatch({
                type:reviewActionType.FETCH_REVIEW_ALL,
                payload: res.data.rs,
            })
        })
        .catch(err=>console.log('error fetching data',err))


}

export const reviewSelectedFilter=(props)=>{
    return{
        type:reviewActionType.REVIEW_SELECTED_FILTERS,
        payload:props,
    }

}

export const reviewImgFilter=(props)=>{
    return{
        type:reviewActionType.REVIEW_IMG_FILTERS,
        payload:props,
    }

}


export const addReviewToBackend=(item)=>{
    return{
        type:reviewActionType.ADD_REVIEW_TO_BACKEND,
        payload:item,
    }
}

export const updateDummyBackend =(item)=>{
    return{
        type:reviewActionType.UPDATE_DUMMY_BACKEND,
        payload:item,
    }
}