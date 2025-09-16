// Delete Todo Button
import { useTodoStore } from "../../store/TodoStore";


interface RemoveButtonProps {
    index: number;
}

export function RemoveButton({ index }: RemoveButtonProps) {

    const removeTodo = useTodoStore((state) => state.removeTodo);

    const handleClick = () => {
        removeTodo(index);
    };

    return (
        <button onClick={handleClick}>
            Delete
        </button>
    );
}