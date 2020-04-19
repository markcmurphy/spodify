import React from "react";
import "./App.css";
import NowPlayingBar from "./components/layout/NowPlayingBar.js";
// import NavBar from "./components/layout/NavBar";
import VertBody from "./components/layout/VertBody.js";

function App() {
  return (
    <div className="App">
      <VertBody />
      {/* <NavBar /> */}
      <NowPlayingBar />
    </div>
  );
}

export default App;
