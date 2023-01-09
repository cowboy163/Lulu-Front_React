import {useEffect, useState} from "react";

const HoverLabel = ({className, weight, length, speed, children}) => {
    const [className_local, setClassName_local] = useState('hoverLabel')
    const [weight_local, setWeight_local] = useState('3px')
    const [length_local, setLength_local] = useState('0')
    const [speed_local, setSpeed_local] = useState('0.3s')
    // mouse hover animation
    useEffect(() => {
        className && setClassName_local(className)
    },[className])
    const handleMouseEnter = () => {
        weight && setWeight_local(weight)
        speed && setSpeed_local(speed)
        length? setLength_local(length) : setLength_local('100%')
    }
    // mouse leave animation
    const handleMouseLeave = () => {
        setLength_local('0')
    }
    return(
        <span style={{
            position:"relative",
            display:"flex",
            height:"100%",
            alignItems:"center"
        }}
              onMouseEnter={() => {handleMouseEnter()}}
              onMouseLeave={() => {handleMouseLeave()}}
              className={className_local}
        >
            {children}
            <div style={{
                position:"absolute",
                bottom:"0",
                left:"0",
                background:'#d3173a',
                width:`${length_local}`,
                height:`${weight_local}`,
                transition:`width ease-in-out ${speed_local}`,
            }}></div>
        </span>
    )
}
export default HoverLabel