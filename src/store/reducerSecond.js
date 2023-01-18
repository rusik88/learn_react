const defaultState = {
    counter_second: 10,
    users: []
}

const SECOND_SET_COUNTER = 'SECOND_SET_COUNTER'
const GET_USERS = 'GET_USER'

export const reducerSecond = (state = defaultState, payload) => {
    switch(payload.type) {
        case SECOND_SET_COUNTER:
            return {...state, counter_second: state.counter_second + 10}
        case GET_USERS:
            return {...state, users: [...state.users, ...payload.payload]}
        default:
            return state
    }
}

/*
* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))*/

export const secondSetCounter = (payload = '') => ({type: SECOND_SET_COUNTER, payload})
export const getUsers = (payload = []) => ({type: GET_USERS, payload})
