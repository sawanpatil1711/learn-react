import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './component/todoInput'
import TodoList from './component/todoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello Redux Todo</h1>
    <TodoInput />
    <TodoList />
    </>
  )
}

export default App
