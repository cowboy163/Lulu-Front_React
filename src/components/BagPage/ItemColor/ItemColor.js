import './ItemColor.scss'
import {useDispatch} from "react-redux";
import {changeColor} from "../../../actions/singleProductActions";

const ItemColor = ({currentColor, colors}) => {
    const dispatch = useDispatch()

    return(
        <div className={'itemColor'}>
            <div className="itemColor__name">color: {currentColor?.colorAlt}</div>
            <ul className="allColors">
                {
                    colors && colors.map((item, index) => 
                        <li key={index}>
                            <img src={item.swatch} alt={item.swatchAlt}
                                 className={currentColor.index === index? 'active' : ''}
                                 onClick={() => {dispatch(changeColor(index))}}
                            />
                        </li>                        
                    )
                }
            </ul>
        </div>
    )
}

export default ItemColor