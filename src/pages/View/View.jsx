import React from 'react'
import { useContext } from "react";
import {AppContext} from '../../context/MainContext/mainContext'

function View() {

    let {item, page}=useContext(AppContext);

    return (
        <div className="viewWrapper">
            <div className="view">
                <div className="links">
                    <a href={`/?page=${page}`} className="link">Home</a>
                </div>
                <div className="viewCell">
                        <div className="viewTitle">{item.data[0].title}</div>
                        <div className="viewTop">
                            <img src={item.links[0].href} alt="" className="view" />
                        </div>
                        <div className="viewBottom">
                            <div className="viewDesc">
                                <div className="description">{item.data[0].description}</div>

                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default View