import ProductCard from "./ProductCard/ProductCard";

const OrderCard = ({item}) => {
    // useEffect(() => {
    //     console.log('item check',item)
    // }, [item])
    // ========== style ==========
    const twoColumn = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '1rem'
    }
    const redRow = {
        color: '#d31334'
    }
    const firstRow = {
        paddingTop: '1rem'
    }
    const letterSpacingFix = {
        letterSpacing: '2px'
    }

    return(
        <div className='orderCardContent' style={{...letterSpacingFix,
            padding: '2rem 1rem 2rem',
            borderBottom: '3px solid black'
        }}>
            <div>
                <span className="orderCardTitle">Order Number: </span>
                <span className="oderCardData">{item?.order_id}</span>
            </div>
            <div>
                <span className="orderCardTitle">Order Date: </span>
                <span className="oderCardData">{item?.createdAt?.slice(0,10)}</span>
            </div>
            <div>
                <span className="orderCardTitle">Status: </span>
                <span className="oderCardData">{item?.order_status?.order_status}</span>
            </div>
            {

                item?.products && item?.products?.map((item, index) =>
                    <div className="orderCardProductCard" key={index}>
                        <ProductCard product={item}/>
                    </div>
                )
            }
            <div className="twoColumn firstRow" style={{...twoColumn, ...firstRow}}>
                <span>Item Total:</span>
                <span>${item.price} CAD</span>
            </div>
            <div className="twoColumn" style={twoColumn}>
                <span>Shipping:</span>
                <span className="redRow" style={redRow}>FREE</span>
            </div>
            <div className="twoColumn" style={twoColumn}>
                <span>Estimated Taxes(13%):</span>
                <span>${(item.price * (item.tax_rate - 1)).toFixed(2)} CAD</span>
            </div>
            <div className="twoColumn" style={twoColumn}>
                <span>Total:</span>
                <span>${item.total} CAD</span>
            </div>
        </div>
    )
}
export default OrderCard