import React from 'react'
import './content.css'

export default function content() {
  return (
    <div className='root'>
      <div className='box1'>
        <p className='headingText'>Let your video do</p>
        <p className='headingText'>the work</p>

        <p className='paragraph'>Video marketing software that makes it easy to</p>
        <p className='paragraph'>find, engage, and grow your audience.</p>

        <button className='button1'>Try for free</button>
        <button className='button2'>Watch video</button>
      </div>
      <div className='box2'>
        <img src={'./laptop.png'} alt='' width="90%" />
      </div>
    </div>
  )
}
