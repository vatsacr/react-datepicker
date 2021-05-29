import React, { Component } from "react";
import DateControls from "./DateControls";
import Years from "./Years";
import Days from "./Days";
import Paginator from "./Paginator";
const daysInMonth = (y, m) => {
  return Array.from(
    { length: new Date(y, m + 1, 0).getDate() },
    (_, i) => i + 1
  );
};

const calculateYears = (current, end) => {
  let tempArr = [];
  for (let i = current; i < end; i++) {
    tempArr.push(i);
  }
  return tempArr;
};
export default class Layout extends Component {
  state = {
    isOpen: { days: true, years: false },
    month: new Date().getMonth(),
    // year: new Date().getFullYear(),
    year: 9900,
    get yearsArr() {
      let currentValue = this.year - (this.year % 20);
      let endYear = currentValue + 20;
      return calculateYears(currentValue, endYear);
    },
  };

  setMonth = (month) => {
    this.setState({
      month: month,
      days: daysInMonth(month, this.state.year),
    });
  };
  setYear = (year) => {
    this.setState({
      year: year,
      days: daysInMonth(this.state.month, year),
    });
  };

  hideShow = (type) => {
    this.setState(() => {
      let isOpen = Object.assign({}, { days: false, years: false });
      isOpen[type] = true;
      return { isOpen };
    });
  };

  calculatePage = (actionObject) => {
    this.setState({
      yearsArr: calculateYears(actionObject.currentYear, actionObject.endYear),
    });
  };

  render() {
    return (
      <div className="datepicker">
        <DateControls
          month={this.state.month}
          year={this.state.year}
          setToggle={this.hideShow}
          setMonth={this.setMonth}
          setYear={this.setYear}
        />
        <div className="">
          <Paginator
            currentYear={this.state.yearsArr[0]}
            endYear={this.state.yearsArr[this.state.yearsArr.length - 1]}
            calculatePage={this.calculatePage}
          />
          {this.state.isOpen.years ? (
            <Years years={this.state.yearsArr} />
          ) : null}
          <div className="p-2">
            {this.state.isOpen.days ? (
              <Days month={this.state.month} year={this.state.year} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
