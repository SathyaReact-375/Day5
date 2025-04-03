import React from 'react'

function Miniproject2() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const even=numbers.map((num,index)=>{
        if(num%2===0)
        {
            return <li key={index} style={{color:"green"}}>{num}</li>
        }
       
    })
    return (
      <div style={{textAlign:"center"}}>
          <h1>Miniproject2</h1>
          <ul style={{listStyleType:"none"}}>
                {even}     
              </ul>
      </div>
    )
}

export default Miniproject2