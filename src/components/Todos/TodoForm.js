import { useState } from "react";
import styles from './TodoForm.module.css'
import Button from "../UI/Button";

function TodoForm({addTodo}) {

    const [todoName, setTodoName] = useState('')

    const submitFormHandler = (e) => {
        e.preventDefault()
        addTodo(todoName)
        setTodoName('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={submitFormHandler}>
                <input onChange={(e) => setTodoName(e.target.value)} placeholder="Enter new Todo" name="todoName" value={todoName} />
                <Button type="submit" title="Submit">Submit</Button>
            </form>
        </div>
    )
}

export default TodoForm