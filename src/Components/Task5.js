import React from 'react'

function Task5() {
    const fruits = [
        { name: "Apple", color: "red" },
        { name: "Banana", color: "yellow" },
        { name: "Orange", color: "orange" },
        { name: "Grapes", color: "purple" },
        { name: "Kiwi", color: "green" }
    ];

  return (
    <div style={{textAlign:"center"}}>
            <h1>Task5</h1>
            <ul style={{listStyleType:"none"}}>
                {fruits.map((fruit, index) => (
                    <li key={index} style={{ color: fruit.color }}>
                        {fruit.name}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Task5