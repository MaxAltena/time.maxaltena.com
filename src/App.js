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

    const time = Date.parse(this.deadline) - Date.parse(new Date());
    if (isNaN(time)) {
      this.props.history.push("/");
    }

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
        <div className="linearBackground">
          <Background />
          {/* <div className="plane">
            <svg>
              <g
                id="plane"
                data-svg-origin="80.30000305175781 127.19999694824219"
              >
                <path
                  fill="#F1F1F1"
                  d="M363.3 202c0 3.6-2.2 7-4.7 9.4-2.4 2.4-5.8 3.2-9.4 3.2l-106.6.8L255 202h108.4z"
                />
                <path
                  fill="#494452"
                  d="M363.5 202c0 3.7-1.8 7-4.6 9.4-3 2.4-7 4-11.2 4H123.2c-8.7 0-15.7-6-15.7-13.5v-.2h256z"
                />
                <path
                  fill="#F1F1F1"
                  d="M162.2 188.3c0-1.8.7-3.4 2-4.5 1-1.2 2.7-2 4.4-2H297c3.4 0 6.3 3 6.3 6.5 0 1.8-.7 3.4-2 4.5-1 1.2-2.7 2-4.4 2H168.5c-3.5 0-6.4-3-6.4-6.5zM338.7 188.5h-13v-13.3c7.2.2 13 6 13 13.3z"
                />
                <path fill="#c9281c" d="M124.7 175.2H88l-7.7-14.7H111" />
                <path
                  fill="#494452"
                  d="M339 188.5h-13.3V175c7.4.2 13.4 6.2 13.4 13.5z"
                />
                <path
                  fill="#c9281c"
                  d="M303.3 188.3c0 1.8-.7 3.4-2 4.5-1 1.2-2.7 2-4.4 2H168.5c-3.5 0-6.4-3-6.4-6.5 0-1.8.7-3.4 2-4.5 1-1.2 2.7-2 4.4-2H297c3.4 0 6.3 3 6.3 6.5z"
                />
                <circle cx="296.9" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="275.5" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="254.2" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="232.8" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="211.4" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="190" cy="188.5" r="4.2" fill="#494452" />
                <circle cx="168.6" cy="188.5" r="4.2" fill="#494452" />
                <path
                  fill="#EDEDF2"
                  d="M350 188.5h-24.3v-13.3h-73l-45-48h-33.5l34 48H88l6.5 12.2-13 26.2H96l11-11.8h103l-9.4 13.4-26.2 37H208l34.6-37 12.5-13.4h108.4c0-7.3-6-13.3-13.5-13.3zm-186-4.8c1.3-1.2 3-2 4.6-2H297c3.4 0 6.3 3 6.3 6.5 0 1.8-.7 3.4-2 4.5-1 1.2-2.7 2-4.4 2H168.5c-3.5 0-6.4-3-6.4-6.5 0-1.7.7-3.3 2-4.5z"
                />
              </g>
            </svg>
          </div> */}
        </div>
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
