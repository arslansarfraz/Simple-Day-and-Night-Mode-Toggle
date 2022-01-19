import React from "react";
import "./App.css";
import react, { useState } from "react";
import { Messege } from "./Messege";

function App() {
  let [count, setCount] = useState(1);
  let [isday, setDay] = useState(false);

  return (
    <div className={isday ? "morning" : "night"}>
      <Messege count={count} />

      <h2>Day time: {isday ? "Good Morning" : "Good Night"}</h2>
      <br />
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Counter
      </button>
      <button
        onClick={() => {
          setDay(!isday);
        }}
      >
        Change color
      </button>
    </div>
  );
}

export default App;
