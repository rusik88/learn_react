import {useAlert} from "./HookProvider";

function HookComponent() {

    const { toggleAlert } = useAlert()

    return(
        <>
            <h1>Hook page</h1>
            <button onClick={ toggleAlert }>Show important message</button>
        </>

    )
}

export default HookComponent