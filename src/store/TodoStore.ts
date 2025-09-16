// TodoList Store
import { create } from "zustand";

interface Todointerface {
    message: string;
    todoList: string[];
    addTodo: (msg: string) => void;
    removeTodo: (index: number) => void;
    clearTodos: () => void;
}
export const useTodoStore = create<Todointerface>((set) => ({
    message: "Todo List",
    todoList: [], 
    addTodo: (msg: string) => set((state) => ({ todoList: [...state.todoList, msg] })),
    
    removeTodo: (index: number) => set((state) => ({ todoList: state.todoList.filter((_, i) => i !== index) })),
    
    clearTodos: () => set({ todoList: [] }),
}));