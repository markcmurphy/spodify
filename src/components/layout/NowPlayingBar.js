import React, { Component } from "react";

export class NowPlayingBar extends Component {
  render() {
    return (
      <div
        className="row fixed-bottom"
        style={{
          minHeight: "12.3vh",
          textAlign: "center",
          margin: "0",
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundColor: "#282828",
          color: "white",
          alignContent: "center",
        }}
      >
        <div className="col-md-4 now-playing-bar">Now playing</div>
        <div className="col-md-4 player-controls">Player Controls</div>
        <div className="col-md-4 now-playing-bar-right">
          Now playing bar-right
        </div>
      </div>
    );
  }
}

export default NowPlayingBar;
