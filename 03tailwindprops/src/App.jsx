import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "PS",
    age: "21"
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Tailwind test
      </h1>

      <Card username= "StrangerThingsTv" btnText = "Click me" />
      <Card username= "Hawkins" btnText = "Visit me" />
      <Card username= "Upside Down" btnText = "ǝɯ ʇısıΛ" />
    </>
  )
}

export default App
