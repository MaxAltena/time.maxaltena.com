import React, { Component } from "react";
import PropTypes from "prop-types";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount = () => {
    this.getTimeUntil(this.props.deadline);
  };

  componentDidMount = () => {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  };

  leading0 = num => {
    return num < 10 ? "0" + num : num;
  };

  getTimeUntil = deadline => {
    const time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  };

  render() {
    const { days, hours, minutes, seconds } = this.state;
    return (
      <div className="Clock">
        <div className="outer">
          <div className="inner">
            <div>{this.leading0(days)}</div>
          </div>
          <div>days</div>
        </div>
        <div className="outer">
          <div className="inner">
            <div>{this.leading0(hours)}</div>
          </div>
          <div>hours</div>
        </div>
        <div className="outer">
          <div className="inner">
            <div>{this.leading0(minutes)}</div>
          </div>
          <div>minutes</div>
        </div>
        <div className="outer">
          <div className="inner">
            <div className="colored">{this.leading0(seconds)}</div>
          </div>
          <div>seconds</div>
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  deadline: PropTypes.string.isRequired
};

export default Clock;
