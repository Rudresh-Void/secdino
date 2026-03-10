import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Demo} from './Component/Demo'
import {Gigademo} from './Component/Gigademo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Welcome</h1>
      <h1>Dino</h1>
      <Employee></Employee>
      <New></New>
      <Demo></Demo>
      <Gigademo></Gigademo>
    </div>
  )
}

function Employee()
{
  return(
    <h1>This is Employee component</h1>
  )
}

function New()
{
  return(
    <h1>Welcome to darkside</h1>
  )
}

export default App
