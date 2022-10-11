//tsrce:
import React, { Component } from "react";

type Props = {
    isLogin : boolean
};

type State = {};

class Header extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
      {/* {!this.props.isLogin
      ? <button type="button" className="btn btn-success">Login</button>
      : <button type="button" className="btn btn-danger">Logout</button>} */}
      <button>{this.props.isLogin === true ? "Logout" : "Login"}</button>
      
        {/* <header>
          <h1 className="heading-text">Pulpit Rock</h1>
        </header> */}
      </>
    );
  }
}

export default Header;
