import React from 'react'

function Task3() {
const listwithkeys=[
        { key: 1, name: "Kanthan" },
        { key: 2, name: "Balasubramaniyan" },
        { key: 3, name: "Kumaran" }
      ]
      
  return (
    <div style={{textAlign:"center"}} >
    <h1>Task3</h1>    
    <ul style={{listStyleType:"none"}}>
      {listwithkeys.map(item => (
        <li key={item.key}>{item.name}</li>
      ))}
    </ul>

    </div>
  )
}

export default Task3