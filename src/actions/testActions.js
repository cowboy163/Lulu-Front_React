import {TEST} from "../helper";
import axios from "axios";
import {MAIN_URL, MY_KEY} from "../const";


const reduxTest = () => dispatch => {
    console.log('test action works')
    axios.get(`${MAIN_URL}/product/filter?${MY_KEY}`)
        .then(res => {
            console.log('the filter data =>',res.data.rs)
            let filterData = res.data.rs
            filterData.Category[0].isChecked = true

            console.log('the changed filter data ==>', filterData)
            axios.post(`${MAIN_URL}/product/allProducts/?${MY_KEY}`,filterData)
                .then(res => {
                    console.log('the final data => ', res.data.rs)
                })
        })
    setTimeout(() => {
        dispatch({
            type: TEST,
            payload: 'test'
        })
    }, 2000)
}

export {
    reduxTest,
}