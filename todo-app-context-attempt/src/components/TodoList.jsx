import React from 'react'
import { useContext } from 'react'
import { TodoContext } from './TodoProvider'

export default function TodoList() {

    const {todos, deleteTodo} = useContext(TodoContext)


  
    return (
        <div>
          {todos.length > 0 ? (
            <ul>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo.text} <button onClick={() => deleteTodo(index)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No todos available</p>
          )}
        </div>
      )
    }
