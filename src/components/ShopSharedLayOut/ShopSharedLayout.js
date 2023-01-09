
import './ShopSharedLayout.scss'
import {Link, Outlet} from "react-router-dom";
import {useEffect} from "react";
import {getBag} from "../../actions/bagActions";
import {useDispatch} from "react-redux";

const ShopSharedLayout = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBag())
    }, [dispatch])
    // useEffect(() => {
    //     console.log('bag check===>', bag)
    // }, [bag])
    return(
        <div className='shop_shared_layout'>
            <div className="title">
                <Link to={'/'}>
                    <img src="/images/logo.svg" alt=""/>
                </Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default ShopSharedLayout