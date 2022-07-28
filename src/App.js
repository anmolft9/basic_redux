import { useState } from "react";
import { Display } from "./Display.js";
import "./App.css";
import { Buttons } from "./Buttons.js";

function App() {
  // const OnButtonClick = (operator) => {
  //   operator === "+" ? setNumber(number + 1) : setNumber(number - 1);
  // };

  return (
    <div className="App">
      <Display />
      <Buttons />
    </div>
  );
}

export default App;
