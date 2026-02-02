import { useState } from "react"


function App() {
  const [color, setColor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12
      inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg
        bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "red"}}>
            Red</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "green"}}>
            Green</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "blue"}}>
            Blue</button>
          <button 
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg"
          style={{backgroundColor: "yellow"}}>
            Yellow</button>
          <button 
          onClick={() => setColor("olive")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "olive"}}>
            Olive</button>
          <button 
          onClick={() => setColor("Grey")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "grey"}}>
            Grey</button>
          <button 
          onClick={() => setColor("Pink")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg"
          style={{backgroundColor: "pink"}}>
            Pink</button>
          <button 
          onClick={() => setColor("White")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg"
          style={{backgroundColor: "white"}}>
            White</button>
          <button 
          onClick={() => setColor("Black")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "black"}}>
            Black</button>
          <button 
          onClick={() => setColor("Purple")}
          className="outline-none px-4 py-1 rounded-full
           text-white shadow-lg"
          style={{backgroundColor: "Purple"}}>
            Purple</button>
          <button 
          onClick={() => setColor("Lavender")}
          className="outline-none px-4 py-1 rounded-full
           text-black shadow-lg"
          style={{backgroundColor: "Lavender"}}>
            Lavender</button>
        </div>
      </div>
    </div>
  )
}

export default App


/*
Note on Onclick
Why SetColor function was not written directly ? - setColor ()
Answer:
OnClick expects a function is getting passed and above method gives the reference of function
which will still get run but you can't pass parameter in it
If passed directly with parameter as setColor("") the function will return to onclick
But onclick does not need the return value it needs full function () {}

Hence we used callback function which called the setColor Function
{() => setColor ("")}
*/
