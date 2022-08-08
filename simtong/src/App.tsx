import React from "react";
import { Global } from "@emotion/react";
import style from "./GlobalStyle";
import Button from "./package/ui/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Global styles={style} />
      <Button buttonType="GrayText" content="가나다" />
    </div>
  );
}

export default App;
