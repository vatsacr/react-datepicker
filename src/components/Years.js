import React, { Component } from "react";

export default class Years extends Component {
  render() {
    return this.props.years.map((year) => (
      <div className="d-inline-block p-2" key={year}>
        {year}
      </div>
    ));
  }
}
