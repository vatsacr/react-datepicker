import React, { Component } from "react";
import DateControls from "./DateControls";
import Years from "./Years";
import Days from "./Days";
import Paginator from "./Paginator";

export default class Layout extends Component {
  state = {
    isOpen: { days: true, years: false },
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    get days() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
  };

  setMonth = (month) => {
    this.setState({
      month: month,
      days: new Date(this.state.year, month + 1, 0).getDate(),
    });
  };
  setYear = (year) => {
    this.setState({
      year: year,
      days: new Date(year, this.state.month + 1, 0).getDate(),
    });
  };

  hideShow = (type) => {
    this.setState(() => {
      let isOpen = Object.assign({}, { days: false, years: false });
      isOpen[type] = true;
      return { isOpen };
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
        <div>
          <Paginator />
          {this.state.isOpen.years ? (
            <Years
              years={[
                2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
                2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
                2020, 2021,
              ]}
            />
          ) : null}
          <div className="p-2">
            {this.state.isOpen.days ? <Days days={this.state.days} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
