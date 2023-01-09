// import {fetchImageReal, filterImage, selectImg, userInput} from "../actions/productAction";
import {useSelector} from "react-redux";
import "./Product.scss";
import {useState} from "react";
import {Link} from "react-router-dom";

export const Product = ({productObj}) => {
    const [selectedImage, setSelectedImage] = useState(0)
     // console.log("product object", productObj)
    //const dispatch = useDispatch()
    //const imageLibrary = useSelector(state => state?.cityViewReducer?.imageLibrary)
    // const selectedImg = useSelector(state => state?.cityViewReducer?.selectedImage)
    const isLoading = useSelector(state => state?.cityViewReducer?.isLoading)


    return <div className='pageContainer'>
        <Link className="productBlock"
              to={`/${productObj?.productId}?color=${productObj.images[selectedImage].colorId}`}
        >
            {isLoading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt=""/>}
            <div className='card_image'>
                {productObj.images && <img className='productImg'
                                           src={productObj?.images[selectedImage]?.mainCarousel.media.split("|").map(url => url.trim())[0]}
                                           alt=""/>}
            </div>


            <div className="colorCarousel">
                {
                    productObj.swatches && productObj.swatches.map(
                        (item, index) => <img
                            onMouseEnter={() => setSelectedImage(index)}
                            className='colorSwatches' key={index} src={item.swatch} alt={item.des}
                        />
                    )
                }
            </div>
            <div className="productDetail">
                {productObj.name && <h3>{productObj.name}</h3>}
                {productObj.price && <h3>{productObj.price.split("CAD").map(price1 => price1.trim())[0]}</h3>}
            </div>

            <div>{
                productObj.swatches && <div>{productObj.swatches.length} colours </div>
            }
            </div>
        </Link>
    </div>
}
