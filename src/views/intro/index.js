import React from 'react';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'message from Intro',
    };
  }

  render() {
    return (<div>{this.state.msg}</div>);
  }
}