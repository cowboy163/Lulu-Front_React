import './SortList.scss'
const SortList = ({value,sortIndex}) => {
    const handleClick = (index) => {
        sortIndex(index)
    }
    return(
        <div className='sortList'>
            <ul className="sortList__ul">
                {
                    value.map((item,index)=>
                        <li key={index}
                            onClick={() => {handleClick(index)}}
                        >
                            {item.name}
                        </li>
                    )
                }
            </ul>

        </div>
    )
}
export default SortList