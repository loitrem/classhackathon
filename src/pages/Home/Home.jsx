import React from 'react'
import {AppContext} from '../../context/MainContext/mainContext'
import { useContext} from "react";

function Home() {

    let {roverData, setRoverData, singleRoverData, setSingleRoverData, dateData, setDateData, singleDateData, setSingleDateData}=useContext(AppContext);

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
                    {/* {roverData?roverData.map((currentPic)=>{
                        <div className="picCell">
                            <div className="picTop">
                                <img src={currentPic.photos[21].img_src} alt="" className="pic" />
                            </div>
                            <div className="picBottom">
                                <div className="picDesc">
                                    <div className="camera">{currentPic.photos[21].camera.full_name}</div>
                                    <div className="sol">SOL: {currentPic.photos[21].sol}</div>
                                    <div className="EarthDate">Date: {currentPic.photos[21].earth_date}</div>
                                </div>
                            </div>
                        </div>
                    }):''} */}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home