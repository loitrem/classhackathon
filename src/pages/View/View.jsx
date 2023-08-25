import React from 'react'
import { useContext } from "react";
import {AppContext} from '../../context/MainContext/mainContext'
import axios from 'axios';

function View() {

    let {item, setItem, page, setPage}=useContext(AppContext);

    const queryParameters = new URLSearchParams(window.location.search)
    console.log('PAGE = ',page,'ITEM + ',item);

    if (queryParameters.get("id")&&item===null){
        let id = queryParameters.get("id")
        setPage(1)
        const getItem = async () => {
            let res = await axios.get(`https://images-api.nasa.gov/search?nasa_id=${id}`);
            setItem(res.data.collection.items[0])
        }
        getItem()
    }


    return (
        <div className="viewWrapper">
            <div className="view">
                <div className="links">
                    <a href={`/?page=${page}`} className="link">{`<<BACK`}</a>
                </div>
                <div className="viewCell">
                    <div className="viewLeft"><img src={item?item.links[0].href:''} alt="" className="viewImg" /></div>
                    <div className="viewRight">
                        <div className="viewTitle">{item?item.data[0].title:''}</div>
                        <div className="viewDesc">
                            <div className="description">{item?item.data[0].description:''}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View