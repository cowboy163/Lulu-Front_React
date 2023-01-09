import './Search.scss'
import {useDispatch, useSelector} from "react-redux";
// import {hideMask, showMask} from "../../../../actions/navBarActions";
import {useState} from "react";
import SearchDetail from "./SearchDetail/SearchDetail";
import {
    changeSearchInput,
    fetchSearchData,
    hideSearchDetail,
    showSearchDetail
} from "../../../../actions/searchActions";
import Mask from "../../Mask/Mask";

const maskData = {
    opacity:'0.5',
    zIndex:'3',
    speed: '0',
}
const Search = () => {
    const dispatch = useDispatch()
    const [showMask_local, setShowMask_local] = useState(false)
    const inputValue = useSelector(state => state?.searchReducers?.inputValue)
    const showMore = useSelector(state => state?.searchReducers?.showMore)
    const handleFocus = () => {
        // dispatch(showMask(maskData))
        setShowMask_local(true)
        dispatch(showSearchDetail())
    }
    const handleBlur = () => {
        // dispatch(hideMask())
        setShowMask_local(false)
        dispatch(hideSearchDetail())
    }
    const handleChange = e => {
        dispatch(changeSearchInput(e.target.value))
        dispatch(fetchSearchData(e.target.value))
    }
    return(
        <div>
            {
                showMask_local? <Mask {...maskData}/> : <Mask/>
            }
            {/*<Mask {...maskData}/>*/}
            <div className="searchBar">
                    <input type="text" placeholder="Search"
                           onFocus={() => {handleFocus()}}
                           onBlur={() => {handleBlur()}}
                           onChange={e => {handleChange(e)}}
                           value={inputValue}
                    />
                <i className="closeButton"
                   style={{
                    display: showMore ? 'inline-block' : 'none',
                }}
                ></i>
            </div>
            <div className="searchBarBottom">
                <SearchDetail/>
            </div>
        </div>

    )
}
export default Search