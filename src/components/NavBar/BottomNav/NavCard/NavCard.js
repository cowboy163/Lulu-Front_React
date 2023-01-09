import {Link} from "react-router-dom";
import './NavCard.scss'
import HoverLabel from "../../../HoverLabel/HoverLabel";
import {useEffect, useState} from "react";
const NavCard = ({value,recommend}) => {
    const [num, setNum] = useState(1)
    // console.log('nav card value received', value)
    useEffect(() => {
        if(value && value?.nav.length > 9) {
            // console.log('the value nav length:',value.nav.length)
            setNum(2)
        } else {
            setNum(1)
        }
    },[value,value.nav.length])
    return(
        <div className='navCard_content'
             style={{
                 flex:`${num}`,
                 width: recommend?'350px':'275px',
             }}
        >
            {
                value.title && <div className="title"
                                    style={{paddingLeft:num===2?'20px':'0'}}
                >
                    <Link to={value.url}>
                    <h1>{value.title}</h1>
                    </Link>
                </div>
            }

            <ul className="navCard_content_navs"
                style={{
                    gridTemplateColumns:`repeat(${num},1fr)`,
                    paddingLeft: num===2? '20px': '0',
                }}
            >
                {
                    !value.title && <div className="line"></div>
                }
                {
                    value.nav && value.nav.map(item =>
                        <li key={item.name}>
                            <Link to={item.url}
                                  className="link"
                            >
                                <HoverLabel>
                                    {item.name}
                                </HoverLabel>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default NavCard