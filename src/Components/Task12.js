import React, { useState } from 'react'

function Task12() {
  const listofitems=["one","two","three"]
    const [Variable,Setfuction]=useState(true)
  return (
    <div style={{textAlign:"center"}}>
        <h1>Task12</h1>
        <p>{Variable?(listofitems.map((list,index)=>(
          <li key={index}>{list}</li>
        ))):""}</p>
        <button onClick={()=>Setfuction(!Variable)}>Toggle</button>
    </div>
  )
}

export default Task12