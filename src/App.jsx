import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { FormTask } from './components/FormTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>🥵👉👈🥵</h1>
      <FormTask />
      <ToDoList />
    </>
  )
}

export default App