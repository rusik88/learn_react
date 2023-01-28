import {createContext, useState} from "react";
import HookAlertComponent from "./HookAlertComponent";
import HookComponent from "./HookComponent";

export const AlertContext = createContext()

function HookMain() {
    const [alert, setAlert] = useState(false)
    const toggleAlert = () => setAlert(prev => !prev)

    return(
        <AlertContext.Provider value={alert}>
            <HookAlertComponent />
            <HookComponent toggle={toggleAlert} />
        </AlertContext.Provider>
    )
}

export default HookMain