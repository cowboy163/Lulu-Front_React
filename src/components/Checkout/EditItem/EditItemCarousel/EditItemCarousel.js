import './EditItemCarousel.scss'
import {useEffect, useState} from "react";

const EditItemCarousel = ({currentColor}) => {

    // state for pics
    const [pics, setPics] = useState([])
    const [index, setIndex] = useState(0)

    // get the pics
    useEffect(() => {
        currentColor && setPics(currentColor?.mainCarousel?.media?.split('|').map(item => item.trim()))
        setIndex(0)
    }, [currentColor])

    return (
        <div className={'editItemCarousel'}>
            <img src={pics[index]} alt="" className="editItemCarousel__image"/>
            <div className="editItemCarousel__buttons">
                <img src="/images/arrow_down.svg" alt="" className="prev button"
                     onClick={() => {
                         setIndex(state => state - 1)
                     }}
                     style={{visibility:index > 0? 'visible' : 'hidden'}}
                />
                <img src="/images/arrow_down.svg" alt="" className="next button"
                     onClick={() => {
                         setIndex(state => state + 1)
                     }}
                     style={{visibility:index < pics.length - 1? 'visible' : 'hidden'}}
                />
            </div>
        </div>
    )
}

export default EditItemCarousel