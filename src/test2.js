import React from 'react'

export default function test2(props) {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        {props.arr.map(arr => (
            <h1>{arr}</h1>    
        ))}
    </div>
  )
}
