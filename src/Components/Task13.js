import React from 'react'

function Task13() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task13</h1>
        <ul style={{listStyleType:"none"}}>
                {numbers.map(num => {
                    if (num % 2 === 0) {
                        return <li>{num}</li>;
                    }
                })}
            </ul>
    </div>
  )
}
export default Task13