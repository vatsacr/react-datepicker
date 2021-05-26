import React, { Component } from "react";

export default class Days extends Component {
  state = {
    days: Array.from({ length: this.props.days }, (_, i) => i + 1),
  };

  componentDidUpdate(nextProps) {
    if (nextProps.days !== this.state.days) {
      this.setState({
        days: Array.from({ length: nextProps.days }, (_, i) => i + 1),
      });
    }
  }
  render() {
    return this.state.days.map((day) => (
      <div className="d-inline-block p-2 text-center days" key={day}>
        {day}
      </div>
    ));
  }
}
