import React from "react";
import Input from "./package/ui/input/index";
import TextArea from "./package/ui/textArea/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TextArea
        width="400px"
        height="500px"
        label="입력해주세요"
        maxLenght={300}
      />
    </div>
  );
}

export default App;
