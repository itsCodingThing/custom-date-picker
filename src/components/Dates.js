import React from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "../styles/CustomDatePicker.css";

export default props => {
  let onDateChange = date => {
    if (date) {
      props.setDate({
        dateFormatted: moment(date).format(props.format),
        currentTimestap: moment(date).format(),
        dateTimeStap: date
      });
    } else {
      props.setDate("");
    }
  };

  let onFocusChange = ({ focused }) => {
    //TODO do something with the onFocusChange function
    // props.setFocused({ clicked: !props.focused.clicked });
  };

  return (
    <div className="picker">
      <SingleDatePicker
        date={props.dateTimeStap}
        onDateChange={onDateChange}
        focused={props.focused.focused}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={date => false}
        small
        noBorder
      />
    </div>
  );
};
