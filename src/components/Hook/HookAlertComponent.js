import {useContext} from "react";
import {AlertContext} from "./HookMain";


function HookAlertComponent() {
    const alert = useContext(AlertContext)

    if(!alert) return null

    return (
        <>
            <h3>This message into alert</h3>
        </>
    )
}

export default HookAlertComponent