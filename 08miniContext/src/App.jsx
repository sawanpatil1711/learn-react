import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Display from './component/Display'
import Input from './component/Input'
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h2>Enter User Information</h2>
      <Input />
      <Display />
    </UserContextProvider>
  )
}
export default App
