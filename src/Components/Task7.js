import React from 'react'

function Task7() {
    const LoggedIn=true
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task7</h1>
        <p>{LoggedIn ? "Welcome" :"Please Log In" }</p>
    </div>
  )
}

export default Task7