import {useEffect, useState} from "react";
import axios from "axios";
import {MAIN_URL, MY_KEY} from "../../../../../const";

const ProductCard = ({product}) => {

    const [productData, setProductData] = useState(null)
    const [colorIndex, setColorIndex] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(0)

    // ========== style ==========
    const itemsInBag = {
        padding: '20px 20px 0',
        borderBottom: '0.0625rem solid #d5d5d5',
        maxHeight: '500px',
        overflow: 'auto'
    }
    const content = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '20px'
    }
    const picture = {
        marginRight: '10px'
    }
    const img = {
        width: '71px',
        borderRadius: '0.25rem'
    }
    const info = {
        width: '100%'
    }
    const line1 = {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: '500'
    }
    const line4 = {
        display: 'flex',
        justifyContent: 'space-between',
        letterSpacing: '2px'
    }
    const letterSpacingFix = {
        letterSpacing: '2px'
    }

    useEffect(() => {
        let arr = product.split('|')
        // console.log('arr check', arr)

        axios.get(`${MAIN_URL}/product/${arr[0]}?${MY_KEY}`)
            .then(res => {
                // console.log('res check', res.data.rs)
                let data = res?.data?.rs
                setProductData(data)

                // get current color index
                let colorInx = undefined
                data.images.forEach((item, index) => {
                    if(item.colorId === arr[1]) {
                        // console.log('color inx get', item.colorId, arr[1])
                        colorInx = index
                    }
                })
                // console.log('final color index check,', colorInx)
                setColorIndex(colorInx)

                // get size index
                setSize(arr[2])
            }).catch(e => {
            console.log('Product Card page fetch error', e)
        })
        setQuantity(arr[3])
    }, [product])

    // useEffect(() => {
    //     console.log('product data check', currentColor)
    // }, [currentColor])
    return (
        <div className='productCard'>
            <div className="items_in_bag" style={itemsInBag}>
                <div className='content' style={content}>
                    <div className="picture" style={picture}>
                        <img src={productData?.images[colorIndex]?.mainCarousel?.media.split('|')[0]} alt="" style={img}/>
                    </div>
                    <div className="info" style={info}>
                        <div className="line1" style={line1}>
                            <div className="left" style={{letterSpacing: '2px'}}>
                                {productData?.name}
                            </div>
                        </div>
                        <div className="line2" style={letterSpacingFix}>
                            {productData?.images[colorIndex]?.colorAlt}
                        </div>
                        <div className="line3" style={letterSpacingFix}>
                            Size {size}
                        </div>
                        <div className="line4" style={line4}>
                            <div className="left">
                                Quantity {quantity}
                            </div>
                            <div className="right">
                                {productData?.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard