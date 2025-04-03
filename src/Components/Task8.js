import React from 'react'

function Task8() {
    const tasks = [
        { name: "Complete the project report", color: "yellow" },
        { name: "Prepare for the meeting", color: "default" },
        { name: "Review pull requests", color: "yellow" },
        { name: "Check emails", color: "default" },
        { name: "Organize the workspace", color: "default" }
    ];
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task8</h1>
        <ul style={{listStyleType:"none"}}>
            {tasks.map((task,index)=>(
                <li key={index} style={{color: task.color}}>{task.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Task8