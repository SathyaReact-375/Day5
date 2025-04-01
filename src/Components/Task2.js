import React from 'react'

function Task2(props) {
  const arr=props.arr.map((val)=>{
    return(
        <p>{val}</p>
    )
  }
)
    return (
    <div>
        <div style={{textAlign:"center"}}>
            <h1>Task2</h1>
  <p>{arr}</p>
</div>
    </div>
  )
}

export default Task2