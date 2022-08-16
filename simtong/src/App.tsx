import React from "react";
import SelectStyle from "./package/ui/selectBox/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SelectStyle defaultvalue="가나다라" content={["1", "2", "3"]} />
    </div>
  );
}

export default App;
