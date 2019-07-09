import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "../styles/App.css";

class Dates extends React.Component {
  state = {
    date: moment()
  };

  onDateChange = date => {
    this.setState({ date });
    if (date) {
      this.props.setDate(moment(date).format("MMM D YYYY"));
    } else {
      this.props.setDate("");
    }
  };

  onFocusChange = ({ focused }) => {
    this.props.setFocused(focused);
  };

  render() {
    return (
      <div className="picker">
        <SingleDatePicker
          placeholder="Dates"
          date={this.state.date}
          onDateChange={this.onDateChange}
          focused={this.props.focused}
          onFocusChange={this.onFocusChange}
          id="your_unique_id"
          numberOfMonths={1}
          isOutsideRange={date => false}
          showDefaultInputIcon
          small
          noBorder
        />
      </div>
    );
  }
}

function CustomInput({ currentDate, setDate, focused, setFocused }) {
  return (
    <TextField
      id="standard-dense"
      label="Date"
      className="input"
      margin="dense"
      variant="outlined"
      value={currentDate}
      onClick={() => {
        setFocused(true);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" aria-label="Toggle password visibility">
              {<Dates setDate={setDate} focused={focused} setFocused={setFocused} />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

function App() {
  const [focused, setFocused] = useState(false);
  const [currentDate, setDate] = useState("");
  console.log(currentDate);
  return (
    <div className="App">
      <div className="custom-date">
        <CustomInput currentDate={currentDate} setFocused={setFocused} focused={focused} setDate={setDate} />
      </div>
    </div>
  );
}

export default App;
