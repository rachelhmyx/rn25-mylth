import React, { Component } from "react";
import "../RateButton/style.css";

interface Props {}

interface State {
  star: number;
}

class RateButtonClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    //Khai báo State:
    this.state = {
      star: 0,
    };

    // Binding event:
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick () {
    this.setState({})
  }

  render() {
    return (
      <>
        {[...Array(5)].map((index) => {
          index += 1;
          return index < this.state.star ? (
            <i className="fas fa-star on" onClick={()=> this.setState(index)}></i>
          ) : (
            <i className="fas fa-star off" onClick={()=> this.setState(index)}></i>
          );
        })}
      </>
    );
  }
}

export default RateButtonClassComponent;
