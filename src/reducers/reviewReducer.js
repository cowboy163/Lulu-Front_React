import {reviewActionType} from "../helper";

const initState={
   reviewItem:{},//fetch
    reviewCheckInfo:[
        {name:'5 stars',isChecked:false,number:5},
        {name:'4 stars',isChecked:false,number:4},
        {name:'3 stars',isChecked:false,number:3},
        {name:'2 stars',isChecked:false,number:2},
        {name:'1 stars',isChecked:false,number:1},
    ],
    reviewImgFilter:[
        {name:'Only show posts with images',isChecked:false,},
    ],
    reviewForm:{
        bodyType:['Athletic','Curvy','Lean','Muscular'],
        exerciseType:['Yoga','Dance','Cycle','Run'],
        gearFit:['Small','Runs a bit small','True to size','Runs a bit large','large']

    },
    dummyReviews:[
        {
        name:'guest1',
        star:5,
        title:'Just what I wanted',
        comment:'Lovely, but 3 inches too long for me.',
            img:' http://api-lulu.hibitbyte.com/static/images/productImages/prod10550089/56496/prod10550089_56496_img3.jpg',

    },
        {
            name:'guest2',
            star:3,
            title:'too long',
            comment:'Love- a little big, but that’s ok l- I’ll order another color in a smaller size.',

            usualSize:'10',
            sizePurchased:'10',
            fits:'Runs a bit large',
            img:'',
        },
        {
            name:'guest3',
            star:4,
            title:'Great Shirt',
            comment:'Love- a little big, but that’s ok l- I’ll order another color in a smaller size.',

            usualSize:'10',
            sizePurchased:'10',
            fits:'Runs a bit large',
            img:'',
        },
    ],

    dummyReviewsDefault:[
        {
            name:'guest1',
            star:5,
            title:'Just what I wanted',
            comment:'Lovely, but 3 inches too long for me.',
            img:' http://api-lulu.hibitbyte.com/static/images/productImages/prod10550089/56496/prod10550089_56496_img3.jpg',

        },
        {
            name:'guest2',
            star:3,
            title:'too long',
            comment:'Love- a little big, but that’s ok l- I’ll order another color in a smaller size.',

            usualSize:'10',
            sizePurchased:'10',
            fits:'Runs a bit large',
            img:'',
        },
        {
            name:'guest3',
            star:4,
            title:'Great Pants',
            comment:'Love- a little big, but that’s ok l- I’ll order another color in a smaller size.',

            usualSize:'10',
            sizePurchased:'10',
            fits:'Runs a bit large',
            img:'',
        },
    ]





}

export const reviewReducer=(state=initState, action)=>{
          let newReviewItem={...state.reviewItem}
    switch (action.type){
        case reviewActionType.FETCH_REVIEW_ALL:
       newReviewItem={...action.payload};
       return{...state,reviewItem: newReviewItem}

        case reviewActionType.REVIEW_SELECTED_FILTERS:
            console.log(action.payload)
            let newStarFilters=[...state.reviewCheckInfo]
            console.log(newStarFilters)
            newStarFilters=newStarFilters.map(item=>item.name===action.payload.item.name? {...item, isChecked:!item.isChecked} : item)
            return{...state,reviewCheckInfo: newStarFilters}

        case reviewActionType.REVIEW_IMG_FILTERS:
            console.log(action.payload)
            let newImgFilters=[...state.reviewImgFilter]
            console.log(newImgFilters)
            newImgFilters=newImgFilters.map(item=>item.name===action.payload.item.name? {...item, isChecked:!item.isChecked} : item)
            return{...state,reviewImgFilter: newImgFilters}

        case reviewActionType.ADD_REVIEW_TO_BACKEND:
            let newDummy=[action.payload,...state.dummyReviews]
            let newDummyDefault=[action.payload,...state.dummyReviewsDefault]
            return {...state,dummyReviews: newDummy,dummyReviewsDefault: newDummyDefault}

        case reviewActionType.UPDATE_DUMMY_BACKEND:
            return {...state,dummyReviews: action.payload}

        default:
            return state

    }

}