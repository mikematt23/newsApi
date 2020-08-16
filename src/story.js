import React from 'react'
import './list.css'



let Story = (props)=>{
  return(
    <div className = 'flex'>
      <h1>{props.story.title}</h1>
      <h2>{props.story.author}</h2>
      <h2>{props.story.created_at}</h2>
      <a href = {props.story.url}>Click To Read</a>
    </div>
  )
}

export default Story