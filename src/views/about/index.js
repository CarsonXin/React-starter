import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'message from About',
    };
  }

  render() {
    return (<div>{this.state.msg}</div>);
  }
}