import {useEffect, useState} from "react";

const Mask = ({className, speed, opacity, zIndex, width, height, position, ...rest}) => {
    const [className_local, setClassName_local] = useState("mask")
    const [speed_local, setSpeed_local] = useState('0.5s')
    const [opacity_local, setOpacity_local] = useState('0')
    const [zIndex_local, setZIndex_local] = useState('-1')
    const [width_local, setWidth_local] = useState('100%')
    const [height_local, setHeight_local] = useState("100%")
    const [position_local, setPosition_local] = useState("absolute")
    // const [fly, setFly] = useState(false)

    useEffect(() => {
        className? setClassName_local(className):setClassName_local("mask")
        speed? setSpeed_local(speed):setSpeed_local('0.5s')
        opacity? setOpacity_local(opacity):setOpacity_local('0')
        width? setWidth_local(width):setWidth_local('100%')
        height? setHeight_local(height):setHeight_local('100%')
        position? setPosition_local(position):setPosition_local("fixed")
        if(zIndex) {
            setZIndex_local(zIndex)
        } else {
            setTimeout(()=>{
                setZIndex_local('-1')
                setPosition_local('absolute')
            },500)
        }
    },[className,setClassName_local, speed, opacity, zIndex, width, height, position])

    return(
        <div className={className_local}
             {...rest}
             style={{
                 position: `${position_local}`,
                 left:"0",
                 top:"0",
                 width:`${width_local}`,
                 height:`${height_local}`,
                 backgroundColor:"black",
                 opacity:`${opacity_local}`,
                 zIndex:`${zIndex_local}`,
                 transition:`opacity ease-in-out ${speed_local}`,
             }}
        >
        </div>
    )
}
export default Mask