import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [valueChange, SetValueChange] = useState("AnkitMaurya");
  const HandleChangeValue = () => {
    console.log("clicked");
    SetValueChange("Name");

    let val = valueChange;
    // First Type--------
    // if (val === "AnkitMaurya") {
    //   SetValueChange("Name");
    // } else {
    //   SetValueChange("AnkitMaurya");
    // }
    // Second Type -----
    val === "AnkitMaurya"
      ? SetValueChange("Name")
      : SetValueChange("AnkitMaurya");
  };
  return (
    <>
      <div>
        <h1 className="heading">{valueChange}</h1>

        <button className="button" onClick={HandleChangeValue}>
          {" "}
          on click
        </button>
      </div>
    </>
  );
}

export default App;
