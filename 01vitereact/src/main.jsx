import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-dev-runtime.js'  // To directly bring in jsx
import App from './App.jsx'

function MyApp(){
  return (
    <div>
       <h1>Custom App | PS </h1>
    </div>
   
  )
}

// const ReactElement = {
//     type: "a",
//     props: {
//         href : "https://www.google.com",
//         target: "_blank"
//     },
//     children : "Click me to visit Google"
// }

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)

const anotherUser = " Prathamesh Somani"

const ReactElement = React.createElement(
  "a",
  {href: "https://www.google.com",target: "_blank"},
  "Click to Visit Google",
  anotherUser
)


createRoot(document.getElementById('root')).render(
  // <StrictMode>

    // {/* // MyApp() // This is how we call as a normal function in Js
    // when called like this then <Strictmode> cannot be used.
    // Not a good practice */}


    //  <App />  /*This is how jsx is called  */

    // {/* <ReactElement />   Cannot call this as it's an object which is not excutable directly like a function */}
    
    // anotherElement   // This part automatically gets converted into object.
       ReactElement
  // </StrictMode>,
)


/* React Element Failed to run couz we did not customrender it like before.
We are rendering it directly and react internally has it's own syntax for render 
and hence it does not excecutes the given object
*/
