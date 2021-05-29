import React, { Component } from "react";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default class DateIndicator extends Component {
  render() {
    return (
      <h4>
        {MONTHS[this.props.selectedMonth].substr(0, 3)}{" "}
        {this.props.selectedYear}
      </h4>
    );
  }
}
