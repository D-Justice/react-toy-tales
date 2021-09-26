import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
let URL = 'http://localhost:3001/toys'

class App extends React.Component{

  state = {
    display: false,
    data: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }
  fetchData = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data => this.setState({
      data: data
    }))
  }
  postToy = (toy) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: toy.name,
        image: toy.image,
        likes: 0
      })
    })
  }
  componentDidMount() {
    this.fetchData()
  }
  addNewToy = (toy) => {
    console.log(toy)
    this.setState({
      
      data: [...this.state.data, toy]
    })
    this.postToy(toy)
  }
  
  removeToy = (toy) => {
    fetch(`${URL}/${toy}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => this.fetchData())
  }

  incLikes = (toy) => {
    
    fetch(`${URL}/${toy.id}`, {
      method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(toy)
  })
  .then(resp => resp.json())
  .then(data => null)
    
  }
  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer incLikes={this.incLikes} removeToy={this.removeToy} toys={this.state.data}/>
      </>
    );
  }

}

export default App;
