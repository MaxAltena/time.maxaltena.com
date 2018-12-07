import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Background from "./assets/Background";
import Countdown from "./components/Countdown";

class App extends Component {
  constructor(props) {
    super(props);

    this.name = props.name.replace(/-/g, " ");
    this.deadline = props.deadline.replace(/-/g, " ");

    this.name = this.state = {
      name: this.name,
      deadline: this.deadline
    };

    document.title = this.state.name + " | Max Altena";
  }

  componentWillReceiveProps = nextProps => {
    this.name = nextProps.name.replace(/-/g, " ");
    this.deadline = nextProps.deadline.replace(/-/g, " ");

    this.setState({
      name: this.name,
      deadline: this.deadline
    });
  };

  render() {
    const { name, deadline } = this.state;
    return (
      <div className="App">
        <Background />
        {name.includes("Canada") ? <div className="Canada" /> : null}
        {name.includes("Canada") ? <div className="Canada" /> : null}
        <Countdown name={name} deadline={deadline} props={this.props} />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  deadline: PropTypes.string
};

export default App;
