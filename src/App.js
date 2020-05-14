import React, { Component } from "react";
import "./App.css";
import DarkTheme, { createTheme } from "react-dark-theme";
import CurrentData from "./Components/CurrentData";

const lightTheme = {
  background: "#F7F7F7",
  text: "black",
};
const darkTheme = {
  background: "#121212",
  text: "black",
};

const myTheme = createTheme(darkTheme, lightTheme);

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: myTheme.background, color: myTheme.text }}>
        <DarkTheme light={lightTheme} dark={darkTheme} />
        <CurrentData />
      </div>
    );
  }
}
export default App;
