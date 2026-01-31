import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../feature/todo/todoSlice';

function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();


  return (
  <div className="flex flex-col gap-y-3 mt-4">
    {console.log(todos)}
    {todos.map((todo) => (
      <div
        key={todo.id}
        className="flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black"
      >
        <input
          type="text"
          className="border outline-none w-full bg-transparent rounded-lg"
          value={todo.title}
          readOnly
        />

        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          ❌
        </button>
      </div>
    ))}
  </div>
)

}

export default TodoList