import React, { useState, createContext } from "react";

export const AppContext=createContext();

const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [roverData, setRoverData] = useState(null);
    const [dateData, setDateData] = useState(null);
    const [singleDateData, setSingleDateData] = useState(null);
    const [singleRoverData, setSingleRoverData] = useState(null);

    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
                roverData,
                setRoverData,

                dateData,
                setDateData,

                
                singleDateData,
                setSingleDateData,

                singleRoverData, 
                setSingleRoverData

            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider