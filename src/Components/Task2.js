import React from 'react'

function Task2() {
    const numbers=[1,2,3]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task2</h1>
        <ul style={{listStyleType:"none"}}>
 {numbers.map((num, index) => (
 <li key={index}>{num}</li>
 ))}
 </ul>
    </div>
  )
}

export default Task2