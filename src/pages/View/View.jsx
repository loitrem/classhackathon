import React from 'react'
import {AppContext} from '../../context/MainContext/mainContext'

function View() {

    let {item,setItem}=useContext(AppContext);

  return (
    <div className="viewWrapper">
        <div className="view">
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
        </div>
    </div>
  )
}

export default View