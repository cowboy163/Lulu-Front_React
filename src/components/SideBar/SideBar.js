
import {useSelector,useDispatch} from "react-redux";
import {useEffect} from "react";
import actions from "../../actions";
import './SideBarGlobal.scss'
import {SingleFilterBlock} from "./SingleFilterBlock";
import {ColorFilterBlock} from "./ColorFilterBlock";
import {SizeFilterBlock} from "./SizeFilterBlock";
import {fetchImageReal} from "../../actions/productAction";



const SideBar = () => {

    const dispatch=useDispatch();
    let allFilterSName=useSelector(state=>state.sideBarReducer.allFilters)
let gender=useSelector(state => state.sideBarReducer.allFilters.Gender);
let category = useSelector(state => state.sideBarReducer.allFilters.Category);
let type= useSelector(state => state.sideBarReducer.allFilters.Type);
let activity = useSelector(state => state.sideBarReducer.allFilters.Activity);
let size = useSelector(state => state.sideBarReducer.allFilters.Size);
let sizeType = useSelector(state => state.sideBarReducer.allFilters.SizeType);
let color = useSelector(state => state.sideBarReducer.allFilters.Colour);
let collection = useSelector(state => state.sideBarReducer.allFilters.Collection);
let features = useSelector(state => state.sideBarReducer.allFilters.Features);
let climate = useSelector(state => state.sideBarReducer.allFilters.Climate);
let fabric = useSelector(state => state.sideBarReducer.allFilters.Fabric);
    let typeArray=Object.keys(allFilterSName)
   // console.log(Object.keys(allFilterSName))
    let filters=[gender,category,type,activity,size,sizeType,color,collection,features,climate,fabric,]
useEffect(()=>dispatch(actions.fetchAllFilters()),[dispatch])
    const current_filter = useSelector(state => state?.sideBarReducer.allFilters)
    useEffect(() => {
        dispatch(fetchImageReal(current_filter))
        // console.log('current filter is =>',current_filter)
    },[current_filter,dispatch])

    return(
        <div className={'testSideBar'}>
            <SingleFilterBlock  filterArray={filters[0]} filterType={typeArray[0]} id={0}/>
            <SingleFilterBlock  filterArray={filters[1]} filterType={typeArray[1]} id={1}/>
            <SingleFilterBlock  filterArray={filters[2]} filterType={typeArray[2]} id={2}/>
            <SingleFilterBlock  filterArray={filters[3]} filterType={typeArray[3]} id={3}/>
            <SizeFilterBlock   filterArray={filters[4]} filterType={typeArray[4]} id={6}/>
            <SingleFilterBlock  filterArray={filters[5]} filterType={typeArray[5]} id={5}/>
            <ColorFilterBlock   filterArray={filters[6]} filterType={typeArray[6]} id={6}/>
            <SingleFilterBlock  filterArray={filters[7]} filterType={typeArray[7]} id={7}/>
            <SingleFilterBlock  filterArray={filters[8]} filterType={typeArray[8]} id={8}/>
            <SingleFilterBlock  filterArray={filters[9]} filterType={typeArray[9]} id={9}/>
            <SingleFilterBlock  filterArray={filters[10]} filterType={typeArray[10]} id={10}/>
        </div>
    )
}


export default SideBar