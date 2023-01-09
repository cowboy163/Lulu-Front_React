import './SearchDetail.scss'
import HoverLabel from "../../../../HoverLabel/HoverLabel";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const SearchDetail = () => {
    const isShow = useSelector(state => state?.searchReducers?.isShow)
    // const isShow = true
    // const showMore = true
    const showMore = useSelector(state => state?.searchReducers?.showMore)
    const title = useSelector(state => state?.searchReducers?.title)
    const trendingSearchData = useSelector(state => state?.searchReducers?.trendingSearchData)
    return (
        <div className="searchDetail"
             style={{
                 display: isShow? "block": "none",
                 width: showMore? "1000px": "305px",
                 left: showMore? '-695px': "0",
             }}
        >
            <div className="content">
                {
                    showMore && <div className="leftSide">
                        <h1>{title}</h1>
                    </div>
                }

                <div className="rightSide">
                    {
                        !showMore && <h1>{title}</h1>
                    }

                    <ul>
                        {
                            trendingSearchData?.map((item, index) =>
                                <li key={index}
                                    style={{padding: showMore? "0 20px":"0"}}
                                >
                                    <Link to={item.url}
                                          className="searchDetailLink"
                                    >
                                        <HoverLabel>
                                            {item.item}
                                        </HoverLabel>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SearchDetail