import React, { useState, createContext } from "react";

export const AppContext=createContext();

const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [item, setItem] = useState(null);


    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
                item,
                setItem

            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider