import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Mountains from "./assets/Mountains";
import Clouds from "./assets/Clouds";
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

    let canadaElements;
    let iframe;
    if (name.includes("Canada")) {
      canadaElements = (
        <div>
          <div className="Canada Canada1" />
          <div className="Canada Canada2" />
        </div>
      );
    }
    if (name.includes("PvT")) {
      iframe = (
        <iframe
          src="https://www.youtube.com/embed/UVxU2HzPGug"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="YouTube"
        />
      );
    }

    return (
      <div className="App">
        <div className="linearBackground">
          <svg className="sun">
            <path
              fill="#F79A43"
              d="M106.3,53.1L90.6,68.7v22h-22l-15.5,15.5L37.5,90.8h-22v-22L0,53.1l15.5-15.5v-22h22L53.1,0l15.5,15.5h22v22"
            />
            <circle fill="#FAB847" cx="53.1" cy="53.1" r="37.6" />
          </svg>
          <svg className="cloud cloud1">
            <path
              fill="#EDEDF4"
              d="M177.9,82.3H26.7C12,82.3,0,70.3,0,55.6c0-2.7,0.4-5.4,1.2-7.8C2.5,43.6,4.7,40,7.6,37c4.8-5,11.6-8,19-8c4.7,0,15,5.2,21,9l6.8,4.3l4.8-20.8c10-19.3,22-21.4,37-21.5h1.3c3.7,0,7.3,0.8,10.8,2.3c12.7,5.2,23,18.8,23,32.6c0,1.5-0.2,3-0.4,4.4l-2.7,19.6l19.5-3.3c7.5-1.3,14,3.6,15.5,10.6l2.4,12l12.3-0.4h0.2c1,0,2,1,2,2.2s-1,2.2-2.3,2.2L177.9,82.3z"
            />
          </svg>
          <svg className="cloud cloud2">
            <path
              fill="#EDEDF4"
              d="M177.9,82.3H26.7C12,82.3,0,70.3,0,55.6c0-2.7,0.4-5.4,1.2-7.8C2.5,43.6,4.7,40,7.6,37c4.8-5,11.6-8,19-8c4.7,0,15,5.2,21,9l6.8,4.3l4.8-20.8c10-19.3,22-21.4,37-21.5h1.3c3.7,0,7.3,0.8,10.8,2.3c12.7,5.2,23,18.8,23,32.6c0,1.5-0.2,3-0.4,4.4l-2.7,19.6l19.5-3.3c7.5-1.3,14,3.6,15.5,10.6l2.4,12l12.3-0.4h0.2c1,0,2,1,2,2.2s-1,2.2-2.3,2.2L177.9,82.3z"
            />
          </svg>
          <svg className="plane">
            <path
              fill="#F1F1F1"
              d="M283,74.8c0,3.6-2.2,7-4.7,9.4c-2.4,2.4-5.8,3.2-9.4,3.2l-106.6,0.8l12.4-13.4H283L283,74.8z"
            />
            <path
              fill="#F1F1F1"
              d="M283.2,74.8c0,3.7-1.8,7-4.6,9.4c-3,2.4-7,4-11.2,4H42.9c-8.7,0-15.7-6-15.7-13.5v-0.2h256V74.8z"
            />
            <path
              fill="#03A0DE"
              d="M81.9,61.1c0-1.8,0.7-3.4,2-4.5c1-1.2,2.7-2,4.4-2h128.4c3.4,0,6.3,3,6.3,6.5c0,1.8-0.7,3.4-2,4.5c-1,1.2-2.7,2-4.4,2H88.2C84.7,67.6,81.8,64.6,81.9,61.1L81.9,61.1z M258.4,61.3h-13V48C252.6,48.2,258.4,54,258.4,61.3z"
            />
            <path fill="#F1F1F1" d="M44.4,48H7.7L0,33.3h30.7" />
            <path
              fill="#F1F1F1"
              d="M258.7,61.3h-13.3V47.8C252.8,48,258.8,54,258.7,61.3L258.7,61.3z"
            />
            <path
              fill="#03A0DE"
              d="M223,61.1c0,1.8-0.7,3.4-2,4.5c-1,1.2-2.7,2-4.4,2H88.2c-3.5,0-6.4-3-6.4-6.5c0-1.8,0.7-3.4,2-4.5c1-1.2,2.7-2,4.4-2h128.5C220.1,54.6,223,57.6,223,61.1z"
            />
            <circle fill="#F1F1F1" cx="216.6" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="195.2" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="173.9" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="152.5" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="131.1" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="109.7" cy="61.3" r="4.2" />
            <circle fill="#F1F1F1" cx="88.3" cy="61.3" r="4.2" />
            <path
              fill="#03A0DE"
              d="M269.7,61.3h-24.3V48h-73l-45-48H93.9l34,48H7.7l6.5,12.2l-13,26.2h14.5l11-11.8h103L120.3,88l-26.2,37h33.6l34.6-37l12.5-13.4h108.4C283.2,67.3,277.2,61.3,269.7,61.3L269.7,61.3z M83.7,56.5c1.3-1.2,3-2,4.6-2h128.4c3.4,0,6.3,3,6.3,6.5c0,1.8-0.7,3.4-2,4.5c-1,1.2-2.7,2-4.4,2H88.2c-3.5,0-6.4-3-6.4-6.5c0-1.7,0.7-3.3,2-4.5H83.7z"
            />
          </svg>
          <Clouds />
          <Mountains />
        </div>
        {canadaElements}
        {iframe}
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
