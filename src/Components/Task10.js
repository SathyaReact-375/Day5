import React from 'react'

function Task10() {
    const time=19
    const output=(time<12)?"Morning":(time<18)?"Afternoon":"Evening"
  return (
    <div style={{textAlign:"center"}}>
       <h1>Task10</h1>
       <p>{output}</p> 
    </div>
  )
}

export default Task10