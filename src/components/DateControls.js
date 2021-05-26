import React, { Component } from "react";
import DateIndicator from "./DateIndicator";
import MonthRotator from "./MonthRotator";
import Tab from "./Tab";

export default class DateControls extends Component {
  hideShow = (type) => {
    this.props.setToggle(type);
  };
  setMonth = (month) => {
    this.props.setMonth(month);
  };
  setYear = (year) => {
    this.props.setYear(year);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <DateIndicator
              selectedMonth={this.props.month}
              selectedYear={this.props.year}
            />
          </div>
          <div className="col-lg-6">
            <MonthRotator
              setMonth={this.setMonth}
              month={this.props.month}
              year={this.props.year}
              setYear={this.setYear}
            />
          </div>
        </div>
        <Tab toggleComponents={this.hideShow} />
      </div>
    );
  }
}
