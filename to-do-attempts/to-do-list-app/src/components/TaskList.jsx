import React, { useState } from 'react'
import Task from './Task';

export default function TaskList() {

    const [taskList, setTaskList] = useState([

        {id: (Math.random *1000),
        text: "Learn React",
        completed: false
        },

        {id: (Math.random *1000),
            text: "Learn Python",
            completed: false
        }
    ])
    const [taskText, setTaskText] = useState("")

    function handleInput(e){
        setTaskText(e.target.value);
        console.log(taskList.length);




    }


    function addTask(){
        const newTask ={id: (Math.random()*1000),
                taskText: setTaskText,
                completed: false}

                setTaskList(...taskList, newTask)

                console.log(taskText)
        }
    
  return (

    <div id="app-container">
    <h1>Task List App</h1>

    <input type="text"  placeholder="Enter new Task..." onChange={handleInput} value={taskText} />
    <button onClick={addTask}>Add Task</button>

         <div className="task-list">
            {taskList.map((task, id )=>
             <Task key={id} taskText={task.text} completed={task.completed}/>
            
            )}
            
        </div>
    </div> )
  
}

