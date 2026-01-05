import { useContext, createContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: "Sample Todo",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleCompleted: (id) => { }
});

export const TodoProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);