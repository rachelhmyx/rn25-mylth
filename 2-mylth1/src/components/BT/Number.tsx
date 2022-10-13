import React, { Component } from 'react'

type Props = {}

type State = {
    numberState : number
}

class Number extends Component<Props, State> {
    constructor(props : Props){
        super(props)

        this.state = {
            numberState : 0
        }
    }

    handleClick = () => {
        this.setState({numberState : this.state.numberState + 1})

    }

  render() {
    return (
        <>
        <p>Number {this.state.numberState}</p>
        <button onClick={this.handleClick}>Button</button>
        </>
      
    )
  }
}

export default Number