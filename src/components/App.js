import React from "react";
import CustomDatePicker from "./CustomDatePicker";

function App() {
  const getCurrentDate = date => {
    console.log(date);
  };
  return (
    <div className="App">
      <CustomDatePicker getDate={getCurrentDate} />
    </div>
  );
}

export default App;
