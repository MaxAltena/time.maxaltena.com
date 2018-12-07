import React, { Component } from "react";
import PropTypes from "prop-types";

import Clock from "./Clock";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      deadline: props.deadline
    };
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.name,
      deadline: nextProps.deadline
    });
  };

  render() {
    const { name, deadline } = this.state;
    return (
      <div className="Countdown">
        <div className="title">{name}</div>
        <Clock deadline={deadline} />
        <div className="date">Time until {deadline}</div>
      </div>
    );
  }
}

Countdown.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired
};

export default Countdown;
