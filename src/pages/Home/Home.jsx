import React, { useState } from 'react'
import {AppContext} from '../../context/MainContext/mainContext'
import { useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


function Home() {
    let [data,setData]=useState(null)
    let {item,setItem,page, setPage }=useContext(AppContext);
    const queryParameters = new URLSearchParams(window.location.search)

    let pageNum;

if (queryParameters.get("page")){
            pageNum = queryParameters.get("page")
            console.log('HEY I AM HERE! ', queryParameters.get("page"));
            } else if (!queryParameters.get("page")){
                pageNum = 1
            }

    const handleOnClickMinus=()=>{

            //back
        if(pageNum>1){
            pageNum--
            navigate(`/?page=${pageNum}`)
        }
        else if (pageNum===1){
            navigate(`/?page=1`)
        }
    }

    const handleOnClickPlus=()=>{

    //next
    if(pageNum<10){
        pageNum++
        navigate(`/?page=${pageNum}`)
    }
}
    

    const navigate = useNavigate();

    const getData = async () => {
        let res = await axios.get(`https://images-api.nasa.gov/search?q=apollo&description=moon&media_type=image&page_size=20&page=${pageNum}`);
        setData(res.data.collection.items)
    }

    useEffect(()=>{
        getData()
        },[pageNum])

        console.log('HERE = ',data?data[0]:'');

    
    return (
        <div className="homeWrapper">
            <div className="home">
                <div className="introWrapper">
                    <div className="intro">
                    <div className="pageMove">
                        <div className="lastPage" onClick={()=>{
                            handleOnClickMinus()
                        
                        }}>PREV</div>
                        <div className="pageOf">{pageNum}/10</div>
                        <div className="nextPage" onClick={()=>{
                            handleOnClickPlus()

                            
                        }}>NEXT</div>
                    </div>
                    </div>
                </div>
                <div className="picBoxWrapper">
                    <div className="picBox">
                        {data?data.map((currentPic, i)=>{
                            return(
                            <div className="picCell" key={i} onClick={()=>{
                                navigate('/view');
                                setItem(currentPic);
                                setPage(pageNum);
                                }}>
                                <div className="picTitle">{currentPic.data[0].title}</div>
                                <div className="picDiv">
                                    <img src={currentPic.links[0].href} alt="" className="pic" />
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