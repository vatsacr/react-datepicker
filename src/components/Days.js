import React, { Component } from "react";

export default class Days extends Component {
  state = {
    days: Array.from(
      {
        length: new Date(this.props.year, this.props.month + 1, 0).getDate(),
      },
      (_, i) => i + 1
    ),
  };
  componentDidUpdate(nextProps) {
    if (
      nextProps.month !== this.props.month ||
      nextProps.year !== this.props.year
    ) {
      this.setState({
        days: Array.from(
          {
            length: new Date(
              this.props.year,
              this.props.month + 1,
              0
            ).getDate(),
          },
          (_, i) => i + 1
        ),
      });
    }
  }
  render() {
    return this.state.days.map((day) => (
      <div className="d-inline-block p-2 days" key={day}>
        {day}
      </div>
    ));
  }
}
