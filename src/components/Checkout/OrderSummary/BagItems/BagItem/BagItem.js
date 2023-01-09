const BagItem = ({key, className, item}) => {
    return(
        <li key={key}
            className={className}
        >
            <img src={item.item_detail.pic} alt={item.item_detail.pic}
                 style={{width: '71px'}}
            />
            <ul className="itemInfo">
                <li className={'itemName'}>{item.item_detail.name}</li>
                <li>{item.item_detail.color}</li>
                <li>Size {item.size}</li>
                <li className={'lastLine'}>
                    <div className="itemQuantity"> Quantity {item.quantity}</div>
                    <div className="itemPrice">${(item.item_detail.num_price * item.quantity).toFixed(2)}</div>
                </li>
            </ul>
        </li>
    )
}
export default BagItem