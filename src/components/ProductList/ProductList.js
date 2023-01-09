import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Product} from "./Product";
import {fetchImageReal} from "../../actions/productAction";
import "./ProductList.scss";
import {changeFilter} from "../../actions/sideBarAction";
import SortList from "./SortList/SortList";

const sortData = [
    {
        id:1,
        name:'Featured',
    },
    {
        id:2,
        name:'New Arrivals',
    },
    {
        id:3,
        name:'Top Rated',
    },
    {
        id:4,
        name:'Price: High to Low',
    },
    {
        id:5,
        name:'Price: Low to High',
    },
]

const ProductList = () => {
    const [number, setNumber] = useState(0)
    const [selectList, setSelectList] = useState([])
    const [sortIndex, setSordIndex] = useState(0)
    const [showSort, setShowSort] = useState(false)
    const imageLibrary = useSelector(state => state?.productReducer?.imageLibrary)
    // console.log("imageLibrary:",imageLibrary)
    const current_filter = useSelector(state => state?.sideBarReducer.allFilters)

    const dispatch = useDispatch()
    useEffect(() => dispatch(fetchImageReal(current_filter,sortData[sortIndex].id)), [dispatch, current_filter,sortIndex])

    useEffect(() => {
        function handleWindowClick() {
            // e.stopPropagation()
            // e.preventDefault()
            // console.log('window click')
            setShowSort(false)
            document.body.removeEventListener('click',handleWindowClick,false)
        }
        setTimeout(()=>{
            if(showSort === true) {
                document.body.addEventListener('click',handleWindowClick)
            }
        },500)
    },[showSort])

    useEffect(() => {
        setNumber(imageLibrary.length)
    }, [imageLibrary.length])

    useEffect(() => {
        // console.log('current_filter===>', current_filter)
        let select_list = []
        for (let item in current_filter) {
            // console.log('what is item',item)
            current_filter[item].forEach((sub_item, index) => {
                // console.log('what is item here',sub_item)

                if (sub_item.isChecked) {
                    select_list.push({
                        filterType: item,
                        id: index,
                        isChecked: sub_item.isChecked,
                        name: sub_item.alt || sub_item.name,
                    })
                }
            })
        }
        setSelectList(select_list)
        // console.log('what is selected list',select_list)
    }, [current_filter])
    const handleClick = item => {
        // console.log('what is item', item)
        dispatch(changeFilter(item))
    }
    const handleSortClick = (e) => {
        setShowSort(!showSort)
    }
    const passSortIndex = index => {
        setSordIndex(index)
    }

    return <div className="listContainer">
        <div className="topArea">
            <div className="top">
                <div className="left">
                    <span>All Items ({number})</span>
                    <span>Available Near You ></span>
                </div>
                <div className="right"
                     onClick={(e) => handleSortClick(e)}
                >
                    <span>
                        Sort by &nbsp;
                    </span> {sortData[sortIndex].name}
                    {
                        showSort && <SortList value={sortData}
                                              sortIndex={passSortIndex}
                        />
                    }
                </div>
            </div>
            <div className="bottom">
                <ul className="bottom_content">
                    {
                        selectList && selectList.map((item, index) =>
                            <li key={index}
                                onClick={() => handleClick(item)}
                                className="bottom_content_detail"
                            >
                                {item.name}
                                <span className="closeButton">x</span>
                            </li>
                        )
                    }
                </ul>

            </div>
        </div>
        <div className="productList">
            {imageLibrary.map((item, index) =>
                <Product productObj={item}
                         key={index}
                />
            )
            }
        </div>
    </div>
}


export default ProductList
