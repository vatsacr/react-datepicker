import React, { Component } from "react";
//const YEARS = Array.from({ length: 9999 }, (_, i) => i + 1);

export default class Years extends Component {
  render() {
    return this.props.years.map((year) => (
      <div className="d-inline-block p-3" key={year}>
        {year}
      </div>
    ));
  }
}
