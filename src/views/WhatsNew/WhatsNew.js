import SideBar from "../../components/SideBar/SideBar";
import ProductList from "../../components/ProductList/ProductList";
// import {Link} from "react-router-dom";
// import HoverLabel from "../../components/HoverLabel/HoverLabel";
import './WhatsNew.scss'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const WhatsNew = () => {
    const navigate = useNavigate()
    const error_page = useSelector(state => state?.sideBarReducer?.error_page)
    useEffect(()=>{
        if(error_page) {
            navigate('/error')
        }
    },[error_page, navigate])
    return(
        <div className="whatsnewContainer"
        style={{
            display:'flex'
        }}
        >
            <div className="container middleBody">
                <div className="sideBar">
                    <h1>What's New</h1>

                    <SideBar/>
                </div>

                <div className="productList">
                    <ProductList/>
                </div>
            </div>
        </div>
    )
}

export default WhatsNew