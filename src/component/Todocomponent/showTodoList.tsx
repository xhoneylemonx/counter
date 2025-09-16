// Show Todo List
import { useTodoStore } from "../../store/TodoStore";
import { RemoveButton } from "../Todocomponent/removeBottom";


export function ShowTodoList() {
    const { message, todoList } = useTodoStore();

    return (
        <>
            <h1>{message}</h1>
            <ul>
                {todoList.map((todoList, index) => (
                    <li key={index}>
                        {todoList} <RemoveButton index={index} />
                    </li>
                ))}
            </ul>

        </>
    );
}   