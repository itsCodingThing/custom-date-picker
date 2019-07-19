import React, { useState } from "react";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import CalaenderToday from "@material-ui/icons/CalendarToday";

import Dates from "./Dates";

function CustomDatePicker({ getDate, format }) {
  const [focused, setFocused] = useState({
    focused: false,
    clicked: true
  });
  const [date, setDate] = useState({
    dateFormatted: "",
    currentTimestap: "",
    dateTimeStap: moment(),
    clicked: true
  });

  if (date.dateFormatted === "") {
    getDate(moment().format());
  } else {
    getDate(date.currentTimestap);
  }

  return (
    <div
      className="custom-date"
      onClick={e => {
        setFocused({
          focused: !focused.focused
        });
      }}
    >
      <TextField
        label="Date"
        className="input"
        margin="dense"
        variant="outlined"
        value={date.dateFormatted}
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
      <Dates
        setDate={setDate}
        dateTimeStap={date.dateTimeStap}
        focused={focused}
        setFocused={setFocused}
        format={format ? format : "MMM D YYYY"}
      />
    </div>
  );
}

export default CustomDatePicker;
