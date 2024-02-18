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

  const handleClick = (e) => {
    console.log(e)
    alert("Jai cliqué sur le title")
  }


 return <>
  <Title color  hidden= "red">bonjour</Title>
  <input type="text" ></input>
  <p>
    bankai bankai
  </p>
  <ul>
    {todos.map(todo => (<li key = {todo}>{todo}</li>))}
  </ul>
 </>
}

function Title ({color, children, hidden}) {// hidden true or false
  if(!hidden){
    return null
  }
  // avec les ...promps on peut passer des props a un composant 

  
  const props ={ 
    id: "monid",
    className: "monclass",
  }
  return <h1 style={{color: color}}{...props}>{children}</h1>
}
//les compasants on une majuscule pour le nom du composant et recois des props en parametre

export default App
