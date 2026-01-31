import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), title: "Learn Redux Toolkit"}],
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
            }
            state.todos.push(newTodo);
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;