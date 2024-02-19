import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const title = "Hello, Vite + React!"
const style = { color: "red", backgroundColor: "blue"}
const showTitle = true
const todos = [
   "Faire les courses",
   "Faire le ménage",
   "Faire la vaisselle"

]

function App() {

    const [person,setPerson] = useState({
      firstName: "John",
      lastName: "Doe",
      age: 18
    })

    const[count,setCount] = useState(0)
 

    const increment = () => {
      
      setPerson({...person, age: person.age + 1})
    
    }

    const incrementCount = () => {
      
      setCount(count + 1)
    
    }



 return <>
    <p>Age de {person.firstName} est : {person.age}</p>
    <button
      onClick = {increment}>Gagner une année
    </button>
    <button
      onClick = {incrementCount}>Incrementer {count}
    </button>
  </>
}

export default App
