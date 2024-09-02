import { useState } from 'react'
import TodoInput from './components/TodoInput'
import './App.css'
import TodoProvider from './components/TodoProvider'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TodoProvider>
          <TodoInput/>
          <TodoList/>
      </TodoProvider>

      </div>
    </>
  )
}

export default App
