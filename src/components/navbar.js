import React from 'react'
import './navbar.css'

export default function navbar() {
  return (
    <div className='root'>
      <div className='logo'>
        <a href='www.google.com'>WISTIA</a>
      </div>
      
      <div className='menu'>
        <a href='www.google.com'>Product</a>
        <a href='www.google.com'>Learning Center</a>
        <a href='www.google.com'>Podcasts & Series</a>
        <a href='www.google.com'>About</a>
      </div>
      <div className='authentication'>
        <button>Login</button>
        <button className='getStartedButton'>Get Started</button>
      </div>

      {/* <img src='./logo192.png' width='50%'/> */}
    </div>
  )
}
