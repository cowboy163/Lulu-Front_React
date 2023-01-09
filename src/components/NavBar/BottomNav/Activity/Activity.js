import {Link} from "react-router-dom";
import './Activity.scss'
import HoverLabel from "../../../HoverLabel/HoverLabel";
// import {useEffect} from "react";

const Activity = ({value, name}) => {
    // useEffect(() => {
    //     console.log('activity value received:',value)
    // },[value])
    return (
        <div className="bottomNav__activity">
            <div className="container">
                {
                    value && <div className="activity__contents">
                        <div className="title">{value?.name}</div>
                        <div className="activity__detail">
                            {
                                value?.contents?.map((item, index) =>
                                    <div key={index}>
                                        <Link to={item.url}
                                              className="link"
                                        >
                                            <HoverLabel weight='2px'>
                                                {item.item}
                                            </HoverLabel>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                        <Link to={value.url} className="activity__nav__link">
                            <div className="activity__nav">SHOP ALL {name}</div>
                        </Link>
                    </div>
                }
            </div>

        </div>
    )
}
export default Activity