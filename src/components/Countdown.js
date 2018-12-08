import React, { Component } from "react";
import PropTypes from "prop-types";

import Clock from "./Clock";
import removeSpecial from "../validation/remove-special";
import isEmpty from "../validation/is-empty";

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
    this.setState({ [e.target.name]: removeSpecial(e.target.value) });
  };

  onBlur = () => {
    let { name, deadline } = this.state;

    if (name instanceof Array) {
      if (!isEmpty(name[0])) {
        name = name[0].replace(/\s+/g, "-");
      } else {
        this.setState({ name: "My countdown" });
        name = "My countdown";
      }
    } else {
      if (!isEmpty(name)) {
        name = name.replace(/\s+/g, "-");
      } else {
        this.setState({ name: "My countdown" });
        name = "My-countdown";
      }
    }

    if (deadline instanceof Array) {
      if (!isEmpty(deadline[0])) {
        deadline = deadline[0].replace(/\s+/g, "-");
      } else {
        this.setState({ deadline: "1 January 2019 00:00:00 GMT+1" });
        deadline = "1-January-2019-00:00:00-GMT+1";
      }
    } else {
      if (!isEmpty(deadline)) {
        deadline = deadline.replace(/\s+/g, "-");
      } else {
        this.setState({ deadline: "1 January 2019 00:00:00 GMT+1" });
        deadline = "1-January-2019-00:00:00-GMT+1";
      }
    }

    this.props.props.history.push(`/${name}/${deadline}/`);
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
          onBlur={this.onBlur}
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
            onBlur={this.onBlur}
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
