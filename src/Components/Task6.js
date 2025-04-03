import React from 'react'

function Task6() {
    const LoggedIn=true
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task6</h1>
        <p>{LoggedIn ? "Hello, User!" : ""}</p>
    </div>
  )
}

export default Task6