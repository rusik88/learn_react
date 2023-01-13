import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList({todos, deleteTodo, toggleTodo}) {

    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h2>Todo items were not created</h2>}
            {todos.map((todo, key) => <Todo toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={key} todo={todo} />)}
        </div>
    )
}

export default TodoList