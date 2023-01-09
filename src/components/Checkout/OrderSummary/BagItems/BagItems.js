import './BagItems.scss'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import BagItem from "./BagItem/BagItem";

const BagItems = () => {
    // get the items in the bag
    const bag = useSelector(state => state?.bagReducers.bag)

    // test
    useEffect(() => {
        console.log('bag check ===>', bag)
    }, [bag])

    return(
        <ul className="orderSummary__bagItems">
            {
                bag && bag.map((item, index) =>
                    <BagItem className={'orderSummary__bagItem'}
                             key={index}
                             item={item}
                    />
                )
            }
        </ul>
    )
}
export default BagItems