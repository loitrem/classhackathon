import axios from "axios"
import {AppContext} from '../../context/MainContext/mainContext'
import { useContext, useEffect } from "react";


function Api() {

    let [roverData, setRoverData, singleRoverData, setSingleRoverData, dateData, setDateData, singleDateData, setSingleDateData]=useContext(AppContext);
    setDateData([5,22,99,40,45,55,100,125,250,275])

    const getSingleRoverData = async() => {
        if (singleDateData){ 
            let res = await axios.get(`http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=${singleDateData}`);
            setSingleRoverData(res.data);
        }
    }
console.log(dateData);
        const getRoverData = () => {
            if (dateData){ 
                dateData.map(async(currentDate)=>{
                    let res = await axios.get(`http://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=${currentDate}`);
                    setRoverData().push(res.data);
                })
                console.log(roverData);
            }
        }

    useEffect(()=>{
        getRoverData()
    },[])

}

export default Api