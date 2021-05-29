import React, { Component } from "react";

export default class Paginator extends Component {
  nextPage = () => {
    this.props.calculatePage({
      endYear:
        this.props.endYear + 20 >= 10000 ? 10000 : this.props.endYear + 20,
      currentYear: this.props.endYear,
    });
  };
  previousPage = () => {
    this.props.calculatePage({
      endYear: this.props.currentYear,
      currentYear:
        this.props.currentYear - 20 <= 0 ? 1 : this.props.currentYear - 20,
    });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.nextPage}
          style={{ display: this.props.endYear === 9999 ? "none" : "" }}
        >
          +
        </button>
        <span>
          {this.props.currentYear} - {this.props.endYear}
        </span>
        <button
          onClick={this.previousPage}
          style={{ display: this.props.currentYear === 1 ? "none" : "" }}
        >
          {" "}
          -{" "}
        </button>
      </div>
    );
  }
}
