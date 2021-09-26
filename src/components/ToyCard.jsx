import React, { Component } from 'react';

class ToyCard extends Component {


  state = {
    likes: this.props.toy.likes
  }
  handleLike = (toy) => {
    toy.likes += 1
    this.props.incLikes(toy)
    this.setState({likes: this.state.likes + 1})
  }
  render() {
    return (
      <div className="card">
        <h2>{`${this.props.toy.name}`}</h2>
        <img src={`${this.props.toy.image}`} alt={`${this.props.toy.name}`} className="toy-avatar" />
        <p>{`${this.state.likes}`} Likes </p>
        <button onClick={() => this.handleLike(this.props.toy)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.removeToy(this.props.toy.id)}className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
