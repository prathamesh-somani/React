import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(15) // useState is a hook, any Dtype can be value()

  // let counter = 15

  const addValue = () => {

    if (counter < 20){
    
    // counter = counter + 1   // For data updation in UI we use hooks
    // UI Updation is controlled by React
    setCounter(counter +1 )
  }
  }
  const removeValue = () => {
    if (counter > 0){
    setCounter (counter - 1)
  }
  }


  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick ={addValue}>Add Value {counter}</button>
     <br />
     <button
     onClick={removeValue}>Remove Value {counter}</button>
     <p>footer : {counter}</p>
    </>
  )
}

export default App


//Assignment 
// Create a method so that value never goes below zero in -ve
// Never goes more than 20