import React from 'react'

function Miniproject1() {
    const time="Afternoon"
  return (
    <div style={{textAlign:'center'}}>
        <h1>Miniproject1</h1>
        <p>{time==="Afternoon"?"Gud Afternoon" : time==="morning"?"Gud Morning" : time==="Evening"?"Gud Evening":""}</p>
    </div>
  )
}

export default Miniproject1