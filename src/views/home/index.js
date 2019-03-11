import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'message from home',
    };
  }

  render() {
    return (<div>{this.state.msg}</div>);
  }
}