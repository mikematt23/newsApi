import React from 'react'
import Story from "./story"
import Search from "./Search"
import './list.css'

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isClicked : false,
      searchBy : '',
      searchValue : '',
      searchHits : []
    }
  }

  change = (e)=>{
    e.preventDefault()
    this.setState({
      
      searchValue : e.target.value
    })
    console.log(this.state.searchValue)
  }


  search(e){
      e.preventDefault()
      this.setState({
        isClicked : true
      })
      if(this.state.searchBy === "KeyWord"){
        fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchValue}`)
        .then(res => res.json())
        .then(data => {
           this.setState({
             searchHits : [...data.hits],
             searchValue : ''
           })
        })
      } else if(this.state.searchBy === "Author"){
        fetch(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.searchValue}`)
        .then(res => res.json())
        .then(data => {
           this.setState({
             searchHits : [...data.hits],
             searchValue : ''
           })
        })
      } else if(this.state.searchBy === 'Date'){
        fetch(`http://hn.algolia.com/api/v1/search_by_date?query=${this.state.searchValue}`)
        .then(res => res.json())
        .then(data => {
           this.setState({
             searchHits : [...data.hits],
             searchValue : ''
           })
        })
      }
     
  }

  KeyWord = (e)=>{
    
    this.setState({
      searchBy : "KeyWord"
    })
    console.log(this.state.searchBy)
  }
  Author = (e)=>{
    
    this.setState({
      searchBy : "Author"
    })
    console.log(this.state.searchBy)
  }
  Date = (e)=>{
    
    this.setState({
      searchBy : "Date"
    })
    console.log(this.state.searchBy)
  }
  

  render(){
    if(!this.state.isClicked){
      return (
        <div className ="flex">
          <form>
            <input type = 'radio' id = 'KeyWord' name= "choose" value ='KeyWord' onClick ={(e)=>this.KeyWord(e)}></input>
              <label >KeyWord</label>

            <input type = 'radio' id = 'Author' name= "choose" value ='Author' onClick ={(e)=>this.Author(e)}></input>
              <label >Author</label>

            <input type = 'radio' id = 'Date' name= "choose" value ='Data' onClick ={(e)=>this.Date(e)}></input>
              <label >Date</label>

            <input value ={this.state.searchValue} placeholder = "Search" onChange = {(e)=>this.change(e)}></input>
            <button onClick ={e =>this.search(e)}>Search</button>
          </form>
          {
            this.props.stories.map((story,index)=>{
              return(
                <Story key ={index} story = {story} />
              )
            })
          }
        </div>
      )
    } else if(this.state.isClicked){
      return(
        <div className = 'flex'>
          <form>
            <input type = 'radio' id = 'KeyWord' name= "choose" value ='KeyWord' onClick ={(e)=>this.KeyWord(e)}></input>
              <label >KeyWord</label>

            <input type = 'radio' id = 'Author' name= "choose" value ='Author' onClick ={(e)=>this.Author(e)}></input>
              <label >Author</label>

            <input type = 'radio' id = 'Date' name= "choose" value ='Data' onClick ={(e)=>this.Date(e)}></input>
              <label >Date</label>

            <input value ={this.state.searchValue} placeholder = "Search" onChange = {(e)=>this.change(e)}></input>
            <button onClick ={e =>this.search(e)}>Search</button>
          </form>
          {
             this.state.searchHits.map((hit,index)=>{
               return(
                 <Search  hit = {hit} index ={index}/>
               )
             })
          }
        </div>
      )
    } 
  }
}
export default List