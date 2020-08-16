import React from 'react';
import List from './List'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      stories : []
    }
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
        .then(res => res.json())
        .then(data => {
            console.log(data.hits)
            this.setState({
              stories : [...data.hits]
            })
        })
  }
  
  render(){
    return(
    <div className = 'style'>
      <List  stories = {this.state.stories}/>
    </div>
    )
  }
}

export default App;
