import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import WhatsNew from "./views/WhatsNew/WhatsNew";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Product from "./views/Product/Product";
import MyBag from "./views/MyBag/MyBag";
import ShopSharedLayout from "./components/ShopSharedLayOut/ShopSharedLayout";
import Checkout from "./views/Checkout/Checkout";
import Login from "./views/Login/Login";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
// import {useDispatch} from "react-redux";
// import {reduxTest} from "./actions/testActions";

const SharedLayout = () => {
    // const dispatch = useDispatch()
    // const handleClick = () => {
    //     dispatch(reduxTest())
    // }
    return (
        <>
            <NavBar/>
            {/*<button onClick={() => {*/}
            {/*    handleClick()*/}
            {/*}}*/}
            {/*        style={{marginTop:"126px"}}*/}
            {/*> redux test*/}
            {/*</button>*/}

                <Outlet/>
                <Footer/>

        </>
    )
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/whats-new/:filter" element={<WhatsNew/>}/>
                <Route path='/:productId' element={<Product/>}/>
                <Route path='/account/login' element={<Login/>}/>
            </Route>
            <Route path="/shop" element={<ShopSharedLayout/>}>
                <Route path='/shop/mybag' element={<MyBag/>}/>
                <Route path='/shop/checkout' element={<Checkout/>}/>
                <Route path='/shop/placeOrder' element={<PlaceOrder/>} />
            </Route>


        </Routes>
    );
}

export default App;
