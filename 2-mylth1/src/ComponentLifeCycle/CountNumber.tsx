import React, { Component } from 'react'

interface Props  {}

interface State  {
    data : number,
    isShow : boolean,
}

class CountNumber extends Component<Props, State> {
  constructor(props : Props){
    super(props)

    this.state = {
        data : 0,
        isShow : true
    }
  }

  handleClick = () => {
    this.setState({data : this.state.data + 1, isShow : !this.state.isShow });
  }

  render() {
    return (
      <>
      <p>{this.state.data}</p>
      {this.state.isShow === true ? 1 : 0}
      <button onClick={this.handleClick}>Count Number</button>
      </>
    )
  }
}

export default CountNumber