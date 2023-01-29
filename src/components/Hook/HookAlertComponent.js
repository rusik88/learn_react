import {useAlert} from "./HookProvider";


function HookAlertComponent() {
    const {alert} = useAlert()

    if(!alert) return null

    return (
        <>
            {console.log('alert', alert)}
            <h3>This message into alert</h3>
        </>
    )
}

export default HookAlertComponent