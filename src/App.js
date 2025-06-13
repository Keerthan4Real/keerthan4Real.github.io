import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import CursorSpotlight from "./components/CursorSpotlight";

function App() {
  return (
    <div className="App">
      <CursorSpotlight />
      <Header />
      <Main />
    </div>
  );
}

export default App;
