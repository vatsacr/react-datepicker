import React, { Component } from "react";

export default class MonthRotator extends Component {
  increaseMonth = () => {
    if (this.props.month === 11) {
      this.props.setMonth(0);
      this.props.setYear(this.props.year + 1);
    } else {
      this.props.setMonth(this.props.month + 1);
    }
  };

  decreaseMonth = () => {
    if (this.props.month === 0) {
      this.props.setMonth(11);
      this.props.setYear(this.props.year - 1);
    } else {
      this.props.setMonth(this.props.month - 1);
    }
  };
  render() {
    return (
      <div>
        <button className="d-inline-block" onClick={this.increaseMonth}>
          +
        </button>
        <span>{this.props.month}</span>
        <button className="d-inline-block" onClick={this.decreaseMonth}>
          -
        </button>
      </div>
    );
  }
}
