import React from "react";
import SelectStyle from "./package/ui/selectBox/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SelectStyle width="250px" optionArray={["근무지를 선택해주세요", "2", "3"]} />
    </div>
  );
}

export default App;
