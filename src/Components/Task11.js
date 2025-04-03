import React from 'react'

function Task11() {
    const clickitems=["item1","item2","item3"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task11</h1>
        
        <ul style={{listStyleType:"none"}}>
        {clickitems.map((item, index) => (
          <li key={index}>
            <button style={{backgroundColor:"white",border:"none"}}
              onClick={() => {
                alert(`${item} is clicked`);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
   
    </div>
  )
}

export default Task11