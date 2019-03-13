import React from 'react';
import {Button} from '@material-ui/core';

export default class Home extends React.Component {
  state = {
    msg: 'message from home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='container'>
      {this.state.msg}
    </div>);
  }
}