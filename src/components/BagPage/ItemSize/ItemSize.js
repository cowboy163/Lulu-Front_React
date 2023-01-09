import './ItemSize.scss'
import {changeSize} from "../../../actions/singleProductActions";
import {useDispatch} from "react-redux";

const ItemSize = ({currentSize, sizes}) => {
    const dispatch = useDispatch()

    return(
        <div className='itemSize'>
            <div className="itemSize__name">Size: {sizes?.length > 1? currentSize.name : 'One Size'}</div>
            <ul className="allSizes">
                {
                    sizes && sizes.map((item, index) =>
                        <li key={index}
                            className={currentSize.index === index? 'active' : ''}
                            onClick={() => {dispatch(changeSize(index))}}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ItemSize