import React, { Component } from "react";

export default class Paginator extends Component {
  render() {
    return (
      <div>
        <button>+</button>
        <span>
          {this.props.years[0]} -{" "}
          {this.props.years[this.props.years.length - 1]}
        </span>
        <button> - </button>
      </div>
    );
  }
}
