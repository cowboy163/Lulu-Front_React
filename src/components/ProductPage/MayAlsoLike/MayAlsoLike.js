import "./MayAlsoLike.scss"
import React from "react";
import {useSelector} from "react-redux";
import {MalProduct} from "./MalProduct";

const MayAlsoLike = ({productObj}) => {
    const imageLibrary = useSelector(state => state?.productReducer?.imageLibrary).slice(0, 4)
    // console.log("YMAL product List:",imageLibrary)
    return(
        <div>
            <h1 className="YMAL">
                You may also like
            </h1>
            <div className="YmalProductList" >
                {imageLibrary?.map((item, index) =>
                    <MalProduct productObj={item}
                             key={index}


                    />
                )
                }
            </div>
        </div>
    )
}
export default MayAlsoLike