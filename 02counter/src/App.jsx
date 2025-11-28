import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { toWords } from "number-to-words"
import './App.css'
function App() {
  let [counter, setcounter]=useState(0)
  let setincrease = () => {
    // if(counter>=20){
    //   return
    // }
  setcounter(counter+1)
  console.log(counter)
}
  let setdecrease= ()=>{
    if(counter<=0){
      return
    }
    setcounter(counter-1)
    console.log(counter)
  }
  // let counter = 0
  return (
   <>
   <h1>
    Counter {counter}
   </h1>
   <h2>
    {toWords(counter)}
   </h2>
   <button onClick={setincrease}>Increment</button>
   <button onClick={setdecrease}>Decrement</button>
   </>
  )
}

export default App
