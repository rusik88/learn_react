import {getUsers} from "../store/reducerSecond";

export const fetchCustomersAction = (dispatch) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(getUsers(json))
            })
    }
}