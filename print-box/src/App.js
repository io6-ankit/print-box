import logo from "./logo.svg";
import "./App.css";
import { Box, colors, withTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { useState } from "react";

const App = () => {
  let color = "red";
  const State = useState();
  const [div, setDiv] = useState(2);
  const ChangeColor = () => {
    setDiv(color);
    console.log("clicked");
  };
  return (
    <>
      <Box className="box">{color}</Box>
      <button className="button" onClick={ChangeColor}>
        click
      </button>
    </>
  );
};
export default App;
