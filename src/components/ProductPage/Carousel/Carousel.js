import {useSelector} from "react-redux";
import {useState} from "react";
import './Carousel.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Carousel = () => {
    // const dispatch = useDispatch()
    const imageLibrary = useSelector(state => state?.singleProductReducers?.single_product_data)
    const currentColor = useSelector(state => state?.singleProductReducers?.current_colour)
    const selectedIndex = currentColor?.index

    const images = imageLibrary?.images[selectedIndex]?.mainCarousel?.media?.split('|')
    // useEffect(() => {console.log('images===>', images)}, [images])

    // const [mainPic, setMainPic] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    // useEffect(() => {
    //     images && setMainPic(images[0])
    // }, [images])

    const updateMainPic = (img,index) => {
        // console.log('new main image', img)
        // setMainPic(img)
        setCurrentIndex(index)
    }
    const handlePrevClick = () => {
        if(currentIndex === 0) {
            setCurrentIndex(images.length-1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }

    }
    const handleNextClick = () => {
        if(currentIndex >= images?.length-1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex(state => state + 1)
        }
    }

    return (
        <div className='mainCarousel'>
            <div className='mainPic'>
                {images && <img src={images[currentIndex]} alt=""/>}
                <div className='nav'>
                    <button className='btn Prev' onClick={()=>{handlePrevClick()}}><ArrowBackIosNewIcon/></button>
                    <button className='btn Next' onClick={()=>{handleNextClick()}}><ArrowForwardIosIcon/></button>
                </div>
            </div>
            <div className='carousel'>
                {
                    images?.map((item, index) =>
                    <div className='thumbNail' onClick={() => updateMainPic(item,index)}
                         key={index}
                    >
                        <img src={item} alt=""/>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Carousel