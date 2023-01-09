import {sideBarActionType, filterAPI, CHANGE_FILTER, ERROR_PAGE} from "../helper";
import axios from "axios";


export const fetchAllFilters=()=>dispatch=>{
    axios.get(filterAPI)
        .then(res=>{
            // console.log(res)
            // console.log("data returned", res.data.rs)

            dispatch({
                type: sideBarActionType.FETCH_ALL_FILTERS,
                payload: res.data.rs,
            })
        })
        .catch(err=>{
            console.log('error fetching data',err)
            dispatch({
                type: ERROR_PAGE,
            })
        })


}

export const selectedFilter =(props)=>{
    return{
        type:sideBarActionType.SELECTED_FILTERS,
        payload:props,
    }

}

export const selectedColor =(props)=>{
    return{
        type:sideBarActionType.SELECTED_COLOR,
        payload:props,
    }

}

export const foldFilter=(name)=>{
    return{
        type:sideBarActionType.FOLD_FILTER,
        payload:name,
    }
}

export const showFilter=(name)=>{
    return{
        type:sideBarActionType.SHOW_FILTER,
        payload:name,
    }
}

export const changeFilter = item => {
    return {
        type: CHANGE_FILTER,
        payload: item,
    }
}
