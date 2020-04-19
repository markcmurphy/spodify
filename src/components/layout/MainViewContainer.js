import React, { Component } from "react";
import MainViewChildNodeSpacer from "./MainViewChildNodeSpacer.js";
import MainViewChildNode from "./MainViewChildNode.js";

export class MainViewContainer extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <MainViewChildNodeSpacer />
        <MainViewChildNode />
      </div>
    );
  }
}

export default MainViewContainer;
