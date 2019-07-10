import React from "react";
import CustomDatePicker from "./CustomDatePicker";
import moment from "moment";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <CustomDatePicker getDate={date => console.log(moment(date).format("MMM D YYYY"))} />
    </div>
  );
}

export default App;
