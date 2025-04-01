import React from 'react'

function Task4(props) {
    const arr=props.arr.map((val)=>{
        return(
            <p>{val}</p>
        )
    })
  return (
    <div>
        <div style={{textAlign:"center"}}>
        <p>{arr}</p>
</div>
    </div>
  )
}

export default Task4