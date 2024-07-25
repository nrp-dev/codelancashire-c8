import React from "react";
import { useState } from "react";

//I have tried to change my add task method but its not adding to the hard coded allTasks?/?
export default function TasksApp() {
  let taskId = 0;
  const [taskText, setTaskText] = useState("");

  
  const [allTasks, setTasks] = useState(
    [
      {
        id: Math.round(Math.random() * 1000), //1
        text: "Learn React",
        completed: true
      },
      {
        id: Math.round(Math.random() * 1000), //2
        text: "Learn Python ",
        completed: false
      },
      {
        id: Math.round(Math.random() * 1000), //3
        text: "Eat",
        completed: true
      },
  
      {
        id: Math.round(Math.random() * 1000), //4
        text: "Sleep",
        completed: false
      },
  
      { id: Math.round(Math.random() * 1000), //5
        text: "Repeat", 
        completed: true 
      },
    ]
  
  )

 console.log(...allTasks);

  // function handleTaskInput(e) { //Add Button
  //   e.preventDefault();

    // if (taskText !== "") {
    //   console.log(taskText);

    //   const newTask = {id: Math.round(Math.random() * 1000),
    //                 text: taskText,
    //               completed: false}
      
      

    //   const currTasks = [...allTasks];
    //   const updatedTasks = currTasks.push(newTask)
    //   setTasks({allTasks:[...allTasks, {newTask}]});
    //   console.log(allTasks)
    //   setTaskText("");
    // }


    function handleTaskInput(){

      if(taskText !== ""){
        setTasks([...allTasks, 
          {
          id: Math.round(Math.random()*1000), ///should be Math.random but hard coded for testing as app is not currently displaying
          text: taskText, 
          completed: false
        }
      ])
      }

      setTaskText("")
    }
    


    // function deleteTask(id) {

    //   const currTasks = [...allTasks]; 
    //   const deleted = currTasks.splice(id, 1);

    //   console.log("Deleted:" + currTasks)
    //   setTasks();

      
    // } // This fn throws an not iterable error
  return (
    <div>
      <input
        type="text"
        id="new-item-input"
        placeholder="Enter New Task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleTaskInput}>Add</button>

      <ul>

        {allTasks.map((task, id) => (
          <li key={id}>{task.text}
          {/* <button onClick={ () => deleteTask(id)}className="delete">Delete</button> */}
          <input type="checkbox" checked={task.completed} />
          </li>
        ))}

        
        

      

      </ul>
    </div>
  )
}
