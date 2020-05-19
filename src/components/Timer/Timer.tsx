import React from "react";
// import styled from "@emotion/styled";

type State = {
  time: number;
  start: number;
  isOn: boolean;
};

class Timer extends React.PureComponent<{}, State> {
  state = {
    time: 0,
    start: 0,
    isOn: false,
  };

  timer: number = 0;

  startTimer = (): void => {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    });
    this.timer = window.setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1
    );
    console.log("start");
  };

  stopTimer = (): void => {
    this.setState({ isOn: false });
    clearInterval(this.timer);
    console.log("stop");
  };

  resetTimer = (): void => {
    this.setState({ time: 0 });
    console.log("reset");
  };

  render() {
    let start = this.state.time === 0 ? <button onClick={this.startTimer}>start</button> : null;
    let stop = this.state.isOn ? <button onClick={this.stopTimer}>stop</button> : null;
    let reset =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}>reset</button>
      ) : null;
    let resume =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.startTimer}>resume</button>
      ) : null;
    return (
      <div>
        <h3>timer: {this.state.time}</h3>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}

export default Timer;
