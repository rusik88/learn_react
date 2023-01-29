import {createContext, useContext, useState} from "react";

const HookContext = createContext()

export const useAlert = () => {
    return useContext(HookContext)
}

function HookProvider({ children }) {

    const [alert, setAlert] = useState(false)
    const toggleAlert = () => setAlert(prev => !prev)

    return(
        <>
            <HookContext.Provider value={{alert, toggleAlert}}>
                { children }
            </HookContext.Provider>
        </>
    )
}

export default HookProvider