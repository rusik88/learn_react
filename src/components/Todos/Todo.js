import styles from './Todo.module.css'
import { RiTodoFill, RiDeleteBack2Line } from 'react-icons/ri'
import { FaCheck } from "react-icons/fa";

function Todo({todo, deleteTodo, toggleTodo}) {

    return (
       <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBack2Line className={styles.deleteIcon}  onClick={() => deleteTodo(todo.id)}/>
            <FaCheck onClick={() => toggleTodo(todo.id)} className={styles.checkIcon} />
       </div>
    )
}

export default Todo