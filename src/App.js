import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Background from "./assets/Background";
import Countdown from "./components/Countdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      deadline: props.deadline
    };
    document.title = this.state.name + " | Max Altena";
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
      <div className="App">
        <Background />
        {name.includes("Canada") ? <div className="Canada" /> : null}
        {name.includes("Canada") ? <div className="Canada" /> : null}
        <Countdown name={name} deadline={deadline} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  deadline: PropTypes.string
};

export default App;
