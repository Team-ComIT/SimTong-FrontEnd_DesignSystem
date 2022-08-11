import React from "react";
import Input from "./package/ui/input/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input width="400px" placeholder="입력받고" errorMessge="Error" />
    </div>
  );
}

export default App;
