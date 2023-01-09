import './Recommend.scss'
import {Link} from "react-router-dom";

const Recommend = ({value}) => {
    return (
        <div className="navBar_recommend">
            {

                value && <Link to={value?.url}
                               className="navBar_recommend__contents"
                >
                    <img src={value?.image_url} alt=""/>
                    <div className="text">
                        <h1>{value?.title}</h1>
                        <p>{value?.intro}</p>
                        <i>{value?.store}</i>
                    </div>
                </Link>
            }

        </div>
    )
}
export default Recommend
