import {createContext, useContext, useReducer} from "react";

const HookContext = createContext()
export const useAlert = () => {
    return useContext(HookContext)
}

const ALERT_HANDLE = 'alertHandle'

const reducer = (state, action) => {
    switch (action.type) {
        case ALERT_HANDLE: {
            return {...state, alert: !state.alert}
        }
        default: return state
    }
}

function HookProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        alert: false
    })

    const toggleAlert = () => {
        dispatch({type: 'alertHandle'})
    }

    return(
        <>
            <HookContext.Provider value={{alert: state.alert, toggleAlert}}>
                { children }
            </HookContext.Provider>
        </>
    )
}

export default HookProvider