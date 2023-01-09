// import {useSelector} from "react-redux";
// import {useState} from "react";
import {Link} from "react-router-dom";
import "./MayLikeProduct.scss"

export const MayLikeProduct = ({MLproductObj}) => {
    // const [selectedImage, setSelectedImage] = useState(0)
    const selectedImage = 0
    //const dispatch = useDispatch()
    //const imageLibrary = useSelector(state => state?.cityViewReducer?.imageLibrary)
    // const selectedImg = useSelector(state => state?.cityViewReducer?.selectedImage)


    return <div className='MLContainer'>
        <Link className="productBlock"
              to={`/${MLproductObj?.MLproductId}?color=${MLproductObj.images[selectedImage].colorId}`}
        >
            <div className='card_image'>
                {MLproductObj.images && <img className='MLproductImg'
                                           src={MLproductObj?.images[selectedImage]?.mainCarousel.media.split("|").map(url => url.trim())[0]}
                                           alt=""/>}



            <div className="MLProduct">
                {MLproductObj.name && <div className="MLproductDetail" > {MLproductObj.name}</div>}
            </div>
            </div>


        </Link>
    </div>
}