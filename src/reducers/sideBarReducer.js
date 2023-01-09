import {CHANGE_FILTER, ERROR_PAGE, sideBarActionType} from "../helper";

const initState={
   allFilters:{
       Gender:[],
       Category:[],
       Type:[],
       Activity:[],
       Size:[],
       SizeType:[],
       Colour:[],
       Collection:[],
       Features:[],
       Climate:[],
       Fabric:[],
   } ,

    isFoldedList:{
        Gender:true,
        Category:true,
        Type:true,
        Activity:true,
        Size:true,
        SizeType:true,
        // Colour:true,
        Collection:true,
        Features:true,
        Climate:true,
        Fabric:true,
    },
    isShownList:{
        Gender:true,
        Category:true,
        Type:true,
        Activity:true,
        Size:true,
        SizeType:true,
        Colour:true,
        Collection:true,
        Features:true,
        Climate:true,
        Fabric:true,
    },
    error_page: false,

}

export const sideBarReducer=(state=initState, action)=>{
    // let newState={...state};
    let newIsShownList={...state.isShownList};
    let newIsFoldedList={...state.isFoldedList};
    let newFilters={...state.allFilters}

  switch(action.type)  {
      case sideBarActionType.FETCH_ALL_FILTERS:
          // console.log(action.payload)
          newFilters = action.payload;
          // console.log('filterreducer',action.payload)
          return{...state,allFilters:newFilters}

      case sideBarActionType.SELECTED_FILTERS:
          // console.log(action.payload)
          let changeType=newFilters[`${action.payload.filterType}`]
          // console.log(changeType)
          changeType=changeType.map(item=>item.name===action.payload.item.name? {...item, isChecked:!item.isChecked} : item)
          let newAllFilters={...newFilters,[`${action.payload.filterType}`]:changeType}
          // console.log(newState)
          return{...state,allFilters: newAllFilters}

      case sideBarActionType.SELECTED_COLOR:
          // console.log(action.payload)
          let changeColor=newFilters[`${action.payload.filterType}`]
          // console.log(changeColor)
          changeColor=changeColor.map(item=>item.alt===action.payload.item.alt? {...item, isChecked:!item.isChecked} : item)
          let updateColorFilter={...newFilters,[`${action.payload.filterType}`]:changeColor}
          // console.log(newState)
          return{...state,allFilters: updateColorFilter}

      //show the single filter
      case sideBarActionType.SHOW_FILTER:
          // console.log(action.payload)
          newIsShownList={...newIsShownList,[`${action.payload}`]:!newIsShownList[`${action.payload}`]}
          return {...state,isShownList: newIsShownList}

      //show 5 items or more
      case sideBarActionType.FOLD_FILTER:
          // console.log(action.payload)
          newIsFoldedList={...newIsFoldedList,[`${action.payload}`]:!newIsFoldedList[`${action.payload}`]}
          return {...state,isFoldedList: newIsFoldedList}
      case CHANGE_FILTER:
          // console.log('new filters', newFilters)
          // console.log('action payload', action.payload)
          newFilters = {...newFilters, [action.payload.filterType]:newFilters[action.payload.filterType].map((item,index) => index === action.payload.id? {...item, isChecked: false}: {...item})}
          return {...state, allFilters: newFilters}
      case ERROR_PAGE:
          return {...state, error_page: true}


      default:
          return state

}

}
