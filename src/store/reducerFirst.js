const defaultState = {
    counter: 10
}

const FIRST_SET_COUNTER = "FIRST_SET_COUNTER"

export const reducerFirst = (state = defaultState, payload) => {
    switch(payload.type) {
        case FIRST_SET_COUNTER:
            return {...state, counter: state.counter + 5}

        default:
            return state
    }
}

export const firstSetCounter = (payload = '') => ({type: FIRST_SET_COUNTER, payload})
