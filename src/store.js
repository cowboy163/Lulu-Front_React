import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import testReducers from "./reducers/testReducers";
import navBarReducers from "./reducers/navBarReducers";
import searchReducers from "./reducers/searchReducers";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {productReducer} from "./reducers/productReducer";
import {reviewReducer} from "./reducers/reviewReducer";
import singleProductReducers from "./reducers/singleProductReducers";
import bagReducers from "./reducers/bagReducers";
import checkoutReducers from "./reducers/checkoutReducers";
import paymentReducers from "./reducers/paymentReducers";
import placeOrderReducers from "./reducers/placeOrderReducers";

export default configureStore({
    reducer: {
        testReducers,
        navBarReducers,
        searchReducers,
        sideBarReducer,
        productReducer,
        reviewReducer,
        singleProductReducers,
        bagReducers,
        checkoutReducers,
        paymentReducers,
        placeOrderReducers,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})