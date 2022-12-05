import React, { useState } from 'react'

export default function Test(props) {
  const [show, setshow] = useState(false)

  return (
    <div>
      {show &&
        <h1>
          {props.number}
        </h1>
      }
      <button onClick={() => setshow(true)}>show</button>
      <button onClick={() => setshow(false)}>hide</button>
    </div>
  )
}

