import React, { Component } from "react";

export class MainViewChildNodeSpacer extends Component {
  render() {
    return (
      <nav
        className="navbar fixed-top navbar-dark"
        style={{
          textAlign: "center",
          alignContent: "center",
          left: "16%",
          color: "white",
        }}
      >
        <div className="row">
          <ul>
            <li>Next Page</li>
            <li>Prev Page</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default MainViewChildNodeSpacer;
