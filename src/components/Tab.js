import React, { Component } from "react";

export default class Tab extends Component {
  toggle = (type) => {
    type === "days"
      ? this.props.toggleComponents("days")
      : this.props.toggleComponents("years");
  };
  render() {
    return (
      <div>
        <button className="d-inline-block" onClick={() => this.toggle("days")}>
          Days
        </button>
        <button className="d-inline-block" onClick={() => this.toggle("years")}>
          Years
        </button>
      </div>
    );
  }
}
