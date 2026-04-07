import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function fun() {
    alert("You clicked on Button")
  }
  const fruit=(name,ap,bn)=> {
    alert (name,ap,bn)
  }

   let data="Demo"
  function updata() {
    data="Example"
    alert(data);

  }
  return (
    <>
      <h1><u>Example of Arrow function</u></h1>
      <button onClick={fun}>Click on button</button>
      <button onClick={()=>fruit("First Parameter")}>Arrow Fruit Button</button>
      <button onClick={()=>fruit("You clicked on Apple")}>APPLE</button>
      <button onClick={()=>fruit("You clicked on Banana")}>BANANA</button>
      <h1><u>Sate in react</u></h1>
      <h1>{data}</h1>
      <button onClick={updata}>Click to change value</button>
    </>
  )
}

export default App