import {useSelector} from "react-redux";
// import {useState} from "react";
// import {Link} from "react-router-dom";
import './WhyWeMade.scss'

const WhyWeMade= () => {

    const current_product = useSelector(state => state?.singleProductReducers.single_product_data)
    const current_colour = useSelector(state => state?.singleProductReducers.current_colour)
    // console.log("current product:" , current_product)

    return(
        <div className="WhyWeMade">
            <div className="WhyLeft">
            <h1>
                 Why we made this
            </h1>
            <h3>{current_product?.whyWeMadeThis}</h3>
            </div>
            <div className="WhyRight">
    <img className="WhyPic1"  src= {current_colour?.whyWeMadeThis[0]}  alt=""/>
    <img className="WhyPic2"  src= {current_colour?.whyWeMadeThis[1]} alt=""/>
    </div>
        </div>
    )
}
export default WhyWeMade