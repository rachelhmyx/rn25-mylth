import React, { Component } from "react";
import "../LikeButton/style.css";

interface Props {}

interface State {
  isLike: boolean;
}

class LikeButtonClassComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLike: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ isLike: !this.state.isLike });
  }

  render() {
    return (
      <>
        <button className="like_btn" onClick={this.handleOnClick}>
          {this.state.isLike === true ? "unlike" : "like"}
          <i
            className={
              this.state.isLike === true
                ? "fas fa-thumbs-down"
                : "fas fa-thumbs-up"
            }
          ></i>
        </button>
      </>
    );
  }
}

export default LikeButtonClassComponent;
