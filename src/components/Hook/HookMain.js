import HookAlertComponent from "./HookAlertComponent";
import HookComponent from "./HookComponent";
import HookProvider from "./HookProvider";


function HookMain() {

    return(
        <HookProvider>
            <HookAlertComponent />
            <HookComponent />
        </HookProvider>
    )
}

export default HookMain