import React, { useState } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CalaenderToday from "@material-ui/icons/CalendarToday";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "../styles/CustomDatePicker.css";

class Dates extends React.Component {
  state = {
    date: moment()
  };

  onDateChange = date => {
    if (date) {
      this.setState({ date });
      this.props.setDate({ date: moment(date).format(this.props.format), currentTimestap: moment(date).format() });
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
          small
          noBorder
        />
      </div>
    );
  }
}

function CustomDatePicker({ getDate, format }) {
  const [focused, setFocused] = useState(false);
  const [currentDate, setDate] = useState({
    date: "",
    currentTimestap: ""
  });

  if (currentDate.date === "") {
    getDate(moment().format());
  } else {
    getDate(currentDate.currentTimestap);
  }

  return (
    <div className="custom-date">
      <TextField
        id="standard-dense"
        label="Date"
        className="input"
        margin="dense"
        variant="outlined"
        value={currentDate.date}
        onClick={() => {
          setFocused(true);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {
                <IconButton>
                  <CalaenderToday />
                </IconButton>
              }
            </InputAdornment>
          )
        }}
      />
      <Dates setDate={setDate} focused={focused} setFocused={setFocused} format={format ? format : "MMM D YYYY"} />
    </div>
  );
}

export default CustomDatePicker;
