import './BottonNav.scss'
import NavCard from "./NavCard/NavCard";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import Recommend from "./Recommend/Recommend";
import Activity from "./Activity/Activity";
import {changeHeight, hideMask, showMask, unhoverData} from "../../../actions/navBarActions";

const BottomNav = ({isFly, topBarHeight}) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state?.navBarReducers?.hoverData)
    const showBottom = useSelector(state => state?.navBarReducers.showBottom)
    const [height, setHeight] = useState('0')
    // const [maxHeight, setMaxHeight] = useState('0')
    const realHeightRef = useRef()
    const get_height = useSelector(state => state?.navBarReducers.height)

    useEffect(() => {
        // console.log('bottom data => ', data)
        if (data?.contents) {
            dispatch(showMask())
        } else {
            dispatch(hideMask())
        }
        setTimeout(() => {
            let ref_height = realHeightRef.current.clientHeight
            dispatch(changeHeight(ref_height))
        }, 50)
    }, [data, dispatch, showBottom])

    useEffect(() => {
        // console.log('final get height set', get_height)
        setHeight(`${get_height}px`)
    }, [get_height])
    const handleMouseLeave = () => {
        dispatch(unhoverData())
    }

    return (
        <div className="bottomNav" style={{
            paddingBottom: data?.contents? '20px' : '0',
            position: isFly? 'fixed' : 'absolute',
            top: isFly? `-${topBarHeight}px` : '0',
        }}
             onMouseLeave={() => handleMouseLeave()}
        >

            <div className="navCard"
                 style={{
                     // maxHeight: `${maxHeight}`,
                     height: `${height}`,
                 }}
            >
                <div className="forHeightAnimation"
                     ref={realHeightRef}
                >
                    <div className="container">

                        <div className="upperCard"
                        >
                            <div className="navCard_detail">
                                {
                                    (data && data.contents) && data.contents.map((item, index) =>
                                        <NavCard key={index}
                                                 value={item}
                                                 recommend={data.recommend}
                                        />
                                    )
                                }
                            </div>
                            <Recommend value={data && data.recommend}/>
                        </div>
                    </div>
                    <div className="bottomCard">
                        <Activity value={data && data.activity}
                                  name={data?.item}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BottomNav