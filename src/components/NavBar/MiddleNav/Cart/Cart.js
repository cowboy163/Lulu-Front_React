const Cart = props => {
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'30px',
            height:'30px',
            background: 'url(/images/cart.svg) no-repeat center center',
            marginLeft:'35px',
            marginTop:'-5px',
            cursor:"pointer",
        }}
        >
            <div style={{
                position: "absolute",
                top:'1px',
                fontSize:'12px',
                color:'red',
            }}>
                {props.children}
            </div>
        </div>
    )
}
export default Cart