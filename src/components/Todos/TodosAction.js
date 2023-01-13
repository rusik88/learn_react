import Button from "../UI/Button";
import {RiDeleteBack2Line, RiRefreshLine} from "react-icons/ri";

function TodosAction({ resetTodo, deleteTodoCompleted, todoCompleted }) {
    return (
        <>
            <Button title="Refresh" onClick={() => resetTodo()}><RiRefreshLine /></Button>
            <Button disabled={!todoCompleted} title="Deleted" onClick={() => deleteTodoCompleted()}><RiDeleteBack2Line /></Button>
        </>
    )
}

export default TodosAction