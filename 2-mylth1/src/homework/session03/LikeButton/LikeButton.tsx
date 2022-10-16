import React, { Component } from "react";
import "../LikeButton/style.css";

interface Props {}

interface State {
  data: number;
}

class LikeButton extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      data: 0,
    };
  }
  handleClick = () => {
    this.setState({ data: this.state.data + 1 });
  };

  render() {
    return (
      <>
        <button className="like_btn" onClick={this.handleClick}>
          {this.state.data}
          <i className="fas fa-heart"></i> Like
        </button>
      </>
    );
  }
}

export default LikeButton;
