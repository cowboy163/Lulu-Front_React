import "./MayLike.scss"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchImageReal} from "../../../actions/productAction";
import {MayLikeProduct} from "./MayLikeProduct"

const MayLike = () => {
    const imageLibrary = useSelector(state => state?.productReducer?.imageLibrary).slice(0,4)
    // console.log("imageLibrary:", imageLibrary)

    // const filter = {
    //     "Gender": [
    //         {"name": "Men", "isChecked": false},
    //         {"name": "Women", "isChecked": false}]
    // }
    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchImageReal()), [dispatch])

    return (
        <div>
            <h1 className="YouMayLike"> You may like </h1>
            <div className="YMLproductList">
                {imageLibrary.map((item, index) =>
                    <MayLikeProduct MLproductObj={item}
                                    key={index}
                    />
                )
                }
            </div>
        </div>
    )
}
export default MayLike