import React from 'react'
import './list.css'


let Search = (props)=>{
  return(
    <div key ={props.index} className ='flex'>
      <h1>{props.hit.title}</h1>
      <h2>{props.hit.author}</h2>
      <h2>{props.hit.created_at}</h2>
      <a href = {props.hit.url}>Click To Read</a>
    </div>
  )
}

export default Search