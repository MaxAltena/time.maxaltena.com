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

  onChange = e => {
    this.setState({ [e.target.name]: [e.target.value] });
  };

  render() {
    const { name, deadline } = this.state;
    return (
      <div className="Countdown">
        <input
          type="text"
          name="name"
          className="title"
          value={name}
          onChange={this.onChange}
        />
        <Clock deadline={deadline} />
        <div className="date">
          Time until{" "}
          <input
            type="text"
            name="deadline"
            className="date"
            value={deadline}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

Countdown.propTypes = {
  name: PropTypes.string.isRequired,
  deadline: PropTypes.string
};

export default Countdown;
