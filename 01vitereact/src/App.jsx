
import Chai from './chai.jsx'

function App() {
  const username = "Prathamesh"

  return (
    <> 
   <Chai/>
   <h1>Chai aur React {username} </h1> {/*{} These are expressions to call variable.  Only Evaluated(Final) outcomes can be passed*/}
   <p> Lorem, ipsum dolor.</p>
   </>
  )
}

export default App


/* We can only return one html tag in the function , so in order to return more than one tags we wrap them in an <div> wrapper.
We can also use empty wrappers <> instead of div wrapper.
*/

// Same Logic applies in React App.
