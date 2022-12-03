//import React, { useState } from 'react'

import Navbar from "./components/navbar"
import './style.css'

export default function App() {
  // const [list2, setlist2] = useState([
  //   {id:1, name: "jack", age: 26},
  //   {id:2, name: "andy", age: 20},
  //   {id:3, name: "simon", age: 22},

  // ])

  return (
    <div style={{backgroundColor: "#00308F"}}>
      {/* <div className="container">
        <Navbar/>
      </div> */}
      
      {/* {list2.map(data => 
        <div key={data.id}>
          <h3 style={{color: "red"}}>student name: {data.name}</h3>
          <h3>student age: {data.age}</h3>
        </div>
      )} */}
    </div>
  )
}
