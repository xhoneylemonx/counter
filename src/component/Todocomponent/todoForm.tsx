// Todo List add Form
import { useTodoStore } from "../../store/TodoStore";
import { useState } from "react";

export function TodoForm() {
    const addtodo = useTodoStore((state) => state.addTodo);

    // แก้ไขตรงนี้: ใช้ Array destructuring สำหรับ useState
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addtodo(newTodo);
            setNewTodo("");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
}