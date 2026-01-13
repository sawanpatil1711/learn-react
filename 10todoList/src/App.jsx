import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './component/TodoForm'
import TodoItem from './component/TodoItem'
import { TodoProvider } from './context/index'


function App() {
  
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => { //todo is an object
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos])
  } 

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo)))
  } //jo bhi updated todo aa raha he usme sab he ki new id , text , completed

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  useEffect(() => {
    const effTodos = JSON.parse(localStorage.getItem("localTodos"))
    if (effTodos?.length > 0) setTodos(effTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />  
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
