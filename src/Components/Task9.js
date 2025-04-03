import React from 'react'

function Task9() {
    const empty=[]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Task9</h1>
        <p>{empty.length===0?"No items available":`${empty}`}</p>
    </div>
  )
}

export default Task9