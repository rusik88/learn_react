import {addTodoAction} from "../toolkitSlice";

export const appAsyncUsers = (dispatch) => {
    return async (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                dispatch(addTodoAction(json))
            })
    }
}