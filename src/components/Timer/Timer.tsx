import React from "react";
// import styled from "@emotion/styled";

class Timer extends React.PureComponent {
  state = {
    time: 0,
  };

  timer: number = 0;

  startTimer = (): void => {
    this.timer = window.setInterval(
      () =>
        this.setState({
          time: this.state.time + 1,
        }),
      1000
    );
    console.log("start");
  };

  stopTimer = (): void => {
    clearInterval(this.timer);
    console.log("stop");
  };

  resetTimer = (): void => {
    this.setState({ time: 0 });
    console.log("reset");
  };

  render() {
    return (
      <div>
        <h3>Timer: {this.state.time}</h3>
        <button onClick={this.startTimer}>start</button>
        <button onClick={this.stopTimer}>stop</button>
        <button onClick={this.resetTimer}>reset</button>
      </div>
    );
  }
}

export default Timer;
