import React from "react";
import SelectStyle from "./package/ui/selectBox/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SelectStyle width="250px" optionArray={["1", "2", "3"]} />
    </div>
  );
}

export default App;
