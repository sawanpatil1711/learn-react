import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  
  return (
    <div className="h-screen flex justify-center" style={{ backgroundColor:  color }}>
      <div className='flex justify-center items-center h-16 w-1/2 rounded-3xl mt-4 p-1.5 gap-2.5 bg-blue-400 shadow-lg'>
        <button onClick={()=>setColor("red")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-red-600'>RED</button>
        <button onClick={()=>setColor("orange")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-orange-600'>ORANGE</button>
        <button onClick={()=>setColor("yellow")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-yellow-300'>YELLOW</button>
        <button onClick={()=>setColor("green")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-green-600'>GREEN</button>
        <button onClick={()=>setColor("blue")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-blue-600'>BLUE</button>
        <button onClick={()=>setColor("indigo")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-indigo-700'>INDIGO</button>
        <button onClick={()=>setColor("violet")} className='flex-1 p-2 border border-gray-800 shadow-md  rounded-3xl bg-violet-600'>VIOLET</button>
      </div>
    </div>
  )
}

export default App
