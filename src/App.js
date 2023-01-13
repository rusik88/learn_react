import './App.css';
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import {useEffect, useState} from "react";
import { v4 as uuid} from 'uuid'
import TodosAction from "./components/Todos/TodosAction";

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
      const newTodo = {
          text: text,
          isCompleted: false,
          id: uuid()
      }
      setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = ((id) => {
      setTodos(todos.filter((item) => item.id !== id))
  })

  const toggleTodoHandler = (id) => {
      setTodos(todos.map(todo => {
        return todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}
    }))
  }

  const resetTodoHandler = () => {
      setTodos([])
  }

  const deleteTodoCompletedHandler = () => {
      setTodos(todos.filter((item) => item.isCompleted === false))
  }

    const completedTodosCount = todos.filter(todo => todo.isCompleted === true).length


  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm  addTodo={addTodoHandler} />
        {todos.length > 0 &&
            <TodosAction deleteTodoCompleted={deleteTodoCompletedHandler} todoCompleted={!!completedTodosCount} resetTodo={resetTodoHandler} />
        }

      <TodoList toggleTodo={toggleTodoHandler} deleteTodo={deleteTodoHandler} todos={todos} />

      {!!completedTodosCount &&
        <h3>Completed {completedTodosCount} tasks</h3>
      }
    </div>
  );
}

export default App;
