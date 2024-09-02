import React, { useContext } from 'react'
import { TodoContext } from './TodoProvider'

export default function TodoInput() {

  const [todoInput, setTodoInput] = useState("");

    const {addTodo} = useContext(TodoContext)

    function handleSubmit  (e)  {
        e.preventDefault();
        if (todoInput.trim()) {
          addTodo(todoInput);
          setTodoInput(""); // Clear the input after adding
        }
      };
     
  return(
    <div>
    <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder='Please enter a Todo'
        />
        <button type='submit'>Add Todo</button>

    </form>
    </div>
  )
}
