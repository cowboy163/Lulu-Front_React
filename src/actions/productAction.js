import {FETCH_PRODUCT, LOADING, SELECTED_IMAGE} from "../helper";
import axios from "axios";
import {MAIN_URL, MY_KEY} from "../const";

export const fetchImageReal = (current_filter, sortId) => dispatch => {
    dispatch({
        type: LOADING,
        payload: true
    })
    if ((current_filter && current_filter?.Gender[0]?.name) || !current_filter) {
        // console.log('sort id is', sortId)
        let new_sortId = 1
        if (sortId) {
            new_sortId = sortId
            if (new_sortId > 3) {
                new_sortId = 1
            }
        }
        axios.post(`${MAIN_URL}/product/allProducts?sortingId=${new_sortId}&${MY_KEY}`, current_filter)
            .then(res => {
                // console.log('data fetched===>', res.data.rs)
                let products = res.data.rs.products
                // console.log('all the products',products)
                if(products) {
                    products.forEach(item => {
                        if(item.price) {
                            let price = item.price
                            // console.log('the price test',item.price)
                            let price_real = price.replace(/[^\d]/g, " ")
                            price_real = price_real.trim()
                            price_real = price_real.slice(0,4)
                            // console.log('the real price test', price_real)
                            let price_real_number = Number(price_real)
                            // console.log('the real number',price_real_number)
                            item.price_num = price_real_number
                        }

                    })
                    // console.log('all the products',products)
                    if(sortId === 4) {
                        products.sort(function(a,b){
                            return b.price_num - a.price_num
                        })
                    }
                    if(sortId === 5) {
                        products.sort(function(a,b){
                            return a.price_num - b.price_num
                        })
                    }
                }

                // console.log('the products get',products)

                dispatch({
                    type: FETCH_PRODUCT,
                    // payload: res.data.rs.products
                    payload: products
                })
                dispatch({
                    type: LOADING,
                    payload: false
                })
                // console.log("raw data: >>> ", rs)
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: LOADING,
                    payload: false
                })
            })

    }

}

export const selectImg = (selectedIndex) => dispatch => {
    dispatch(
        {
            type: SELECTED_IMAGE,
            payload: selectedIndex
        }
    )
}





