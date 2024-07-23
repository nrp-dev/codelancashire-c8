import React from 'react'

export default function Task(key, taskText, completed) {
  return (
    <div className="task">

        <input id={key} value={{taskText}} disabled={false}/>
    </div>
  )
}
