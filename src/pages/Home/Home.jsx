import React, { useState } from 'react'
import {AppContext} from '../../context/MainContext/mainContext'
import { useEffect} from "react";
import axios from 'axios';


function Home() {
    let [data,setData]=useState(null)

    const getData = async () => {
        let res = await axios.get(`https://images-api.nasa.gov/search?q=apollo&description=moon&media_type=image`);
        setData(res.data.collection.items)
    }

    useEffect(()=>{
        getData()
        },[])

        console.log('HERE = ',data?data[0]:'');
        console.log(data?data[0].title:'');
    
    return (
        <div className="homeWrapper">
            <div className="home">
                <div className="introWrapper">
                    <div className="intro">
                        <div className="introText">Mars Stuff</div>
                    </div>
                </div>
                <div className="picBoxWrapper">
                    <div className="picBox">
                        {data?data.map((currentPic)=>{
                            return(
                            <div className="picCell">
                                <div className="picTitle">{currentPic.data[0].title}</div>
                                <div className="picTop">
                                    <img src={currentPic.links[0].href} alt="" className="pic" />
                                </div>
                                <div className="picBottom">
                                    <div className="picDesc">
                                        <div className="description">{currentPic.data[0].description}</div>

                                    </div>
                                </div>
                            </div>
                        )}):''}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home