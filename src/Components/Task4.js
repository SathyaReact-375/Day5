import React from 'react'

function Task4() {
    const users = [
        { name: "Sathya", age: 28 },
        { name: "Ananya", age: 24 },
        { name: "Raj", age: 30 },
        { name: "Meera", age: 26 }
    ];

  return (
    <div style={{textAlign:"center"}}>
        <h1>Task4</h1>
        <ul style={{listStyleType:"none",margin:"auto"}}>
        {users.map(user => (
        <li>UserName:{user.name} <br></br> Age:{user.age}</li>
      ))}
        </ul>
    </div>
  )
}

export default Task4