import {CHANGE_SEARCH_INPUT, FETCH_SEARCH_DATA, HIDE_SEARCH_DETAIL, SHOW_SEARCH_DETAIL} from "../helper";

const initState = {
    inputValue:'',
    isShow:false,
    showMore: false,
    title:'TRENDING SEARCH',
    data:[],
    trendingSearchData: [
        {
            item: "align",
            url: "#",
        },
        {
            item: "scuba",
            url: "#",
        },
        {
            item: "shorts",
            url: "#",
        },
        {
            item: "swiftly",
            url: "#",
        },
        {
            item: "belt bag",
            url: "#",
        },
    ]
}

const searchReducers = (state = initState,action) => {
    let newState = {...state}
    switch(action.type) {
        case SHOW_SEARCH_DETAIL:
            newState.isShow = true
            return newState
        case HIDE_SEARCH_DETAIL:
            newState = {...initState}
            return newState
        case CHANGE_SEARCH_INPUT:
            newState.inputValue = action.payload
            return newState
        case FETCH_SEARCH_DATA:
            newState.showMore = true
            newState.title = 'TOP SUGGESTION'
            if(action.payload) {
                newState.data = action.payload
                newState.trendingSearchData = action.payload
            } else {
                newState.data = []
                newState.trendingSearchData = []
            }
            return newState
        default:
            return state
    }
}
export default searchReducers