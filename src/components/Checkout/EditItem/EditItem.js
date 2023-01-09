import './EditItem.scss'
import Mask from "../../NavBar/Mask/Mask";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import EditItemCarousel from "./EditItemCarousel/EditItemCarousel";
import ItemColor from "../../BagPage/ItemColor/ItemColor";
import ItemSize from "../../BagPage/ItemSize/ItemSize";
import {Link} from "react-router-dom";
import {changeColorInBag, changeSizeInBag, editItem} from "../../../actions/bagActions";

const EditItem = ({closePopOut, bagIndex}) => {
    const dispatch = useDispatch()

    const singleProductData = useSelector(state => state?.singleProductReducers?.single_product_data)
    const currentColor = useSelector(state => state?.singleProductReducers?.current_colour)
    const currentSize = useSelector(state => state?.singleProductReducers?.current_size)

    const handleUpdateClick = () => {
        // dispatch(changeColorInBag(currentColor, singleProductData))
        // dispatch(changeSizeInBag(currentSize, singleProductData))
        dispatch(editItem(singleProductData, currentColor, currentSize, bagIndex))
        closePopOut()
    }



    //test
    useEffect(() => {
        // console.log('single product data check ===>', singleProductData)
        // console.log('currentColor check ===>', currentColor)
    }, [singleProductData, currentColor])

    return(
        <div className={'myBag__editItem'}>
            <Mask zIndex={1} opacity={0.5}/>
            <div className="editItemDetails">
                <div className="closeBtn"
                     onClick={() => {closePopOut()}}
                >x</div>
                <div className="carousel">
                    <EditItemCarousel currentColor={currentColor}/>
                </div>
                <div className="editItemInfo">
                    <h1 className="itemName">{singleProductData?.name}</h1>
                    <div className="itemPrice">${singleProductData?.price_num.toFixed(2)}</div>
                    <ItemColor currentColor={currentColor} colors={singleProductData?.swatches}/>
                    <ItemSize currentSize={currentSize} sizes={singleProductData?.sizes[0].details}/>
                    <button className="updateItem"
                            onClick={() => {handleUpdateClick()}}
                    >
                        update item
                    </button>
                    <Link className='viewProductDetails' to={'/' + singleProductData?.productId + '?color=' + currentColor?.colorId + '&sz=' + currentSize?.name}>View product details</Link>
                </div>
            </div>
        </div>
    )
}

export default EditItem