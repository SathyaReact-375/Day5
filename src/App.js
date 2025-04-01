import React from 'react'
import Task1 from './Components/Task1'
import Task2 from './Components/Task2'
import Task4 from './Components/Task4'

function App() {
 const arr=[1,2,3]
 const list_of_obj=[{Name:"sathya",Age:21},{Name:"siva",Age:25},{Name:"Murugan",Age:16}] 
  return (
    <div>
      <h1 style={{textAlign:"center"}}>1.List Rendering Introduction</h1>
      <Task1/>
      <Task2 arr={arr}/>
      <Task4 arr={list_of_obj}/>
    </div>
  )
}

export default App