import React, { createContext, useState } from 'react'


export const TodoContext = createContext()
export default function TodoProvider({children}) {
    const [todos, setTodos] = useState([]);
    
    function addTodo(text) {
        const newTodo = {
        id:  Math.round(Math.random*1000),
        text: text,
        completed: false
        }

        setTodos(...todos, newTodo)
    }

    function deleteTodo(id) {
        setTasks(todos.filter(todo => todo.id !== id));
    }

  return (
    <TodoContext.Provider value={{todos, setTodos , addTodo, deleteTodo}}>
        {children}
    </TodoContext.Provider>
  )
}
