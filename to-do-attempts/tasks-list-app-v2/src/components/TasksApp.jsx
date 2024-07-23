import React from 'react'
import { useState } from 'react'

export default function TasksApp() {
    let taskId = 0;
    const [taskText, setTaskText] = useState("")
    const [tasks, setTasks] = useState([])
    

    function handleTaskInput(e){


        e.preventDefault();

        if(taskText != ""){
          
          
          console.log(taskText)

          const newTask = [{
            id: (Math.round(Math.random()*1000)),
            text: taskText,
            completed: true
          }]

          setTasks(currTasks => [...currTasks, newTask])
          console.log(tasks)
          setTaskText("")

          
        }

        function deleteTask(id) {
          setTasks(tasks.filter(task => task.id !== id));
          }

        

    }

  return (

    <div>
    
        <input type="text" id='new-item-input'  placeholder="Enter New Task..." value={taskText} onChange={e => setTaskText(e.target.value)}/>
        <button onClick={handleTaskInput}>Add</button>

        <ul>
          {tasks.map(task => {
            return(

              <li key={task.id}>{task.text}</li>
             
            )
          })}

        </ul>
  

    </div>
  )
}