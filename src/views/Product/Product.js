import './Product.scss'
import Carousel from "../../components/ProductPage/Carousel/Carousel";
import Order from "../../components/ProductPage/Order/Order";
import MayLike from "../../components/ProductPage/MayLike/MayLike";
import WhyWeMade from "../../components/ProductPage/WhyWeMade/WhyWeMade";
import According from "../../components/ProductPage/According/According";
import MayAlsoLike from "../../components/ProductPage/MayAlsoLike/MayAlsoLike";
import Review from "../../components/ProductPage/Review/Review";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchSingleProduct} from "../../actions/singleProductActions";

const Product = () => {
    const hash = useLocation()
    const dispatch = useDispatch()

    useEffect(()=>{
        // console.log('what is hash?',hash)
        let product_id = hash.pathname
        let str = hash.search
        str = str.split('&')
        // console.log('what is str',str)
        let color_id = str[0]
        let size = undefined
        product_id = product_id.substring(1)
        color_id = color_id.replace(/[^\d]/g,"")
        if(str[1]) {
            size = str[1]
            size = size.substring(3)
        } else {
            size = null
        }
        // console.log('what is size',size)
        // console.log('what is product_id',product_id)
        // console.log('what is color_id',color_id)
        dispatch(fetchSingleProduct(product_id, color_id, size))
    },[hash, dispatch])
    return (
        <div className='single_product_page'>
            <div className="container">

                <div className='order_area'>
                    <div className="order_area__carousel">
                        <Carousel/>

                    </div>
                    <div className='order_area__main'>
                        <Order/>
                    </div>
                    <div className='you_may_like'>
                        <MayLike/>
                    </div>
                </div>

            </div>
            <div className='product_intro'>
                <div className="container">
                    <div className='why_we_made_this'>
                        <WhyWeMade/>
                    </div>
                </div>
                <div className="product_intro__according">
                    <div className="container">
                        <According/>
                    </div>
                </div>
                <div className="container">
                    <div className="you_may_also_like">
                        <MayAlsoLike/>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className='review_area'>
                    <Review/>
                </div>
            </div>
        </div>
    )
}

export default Product