import React, { Component } from 'react'

export default class Random extends Component {
    constructor(props){
        super(props);
        this.state ={
            num : 1
        }
        this.RandomClick = this.RandomClick.bind(this);
    }

    RandomClick(e){
        let rand = Math.floor(Math.random() *10 ) + 1;
        this.setState({ num : rand});
    }
  render() {
 
    return (
      <div>
        <h1>Number: {this.state.num}</h1>
        {this.state.num === 7 && <h2>Winner🎉</h2>}
        {this.state.num !==7 && <button onClick={this.RandomClick}>Click for Random Number!!</button>}
      </div>
    )
  }
}
