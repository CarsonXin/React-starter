import React from 'react';
import {Button} from '@material-ui/core'
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'message from home',
    };
  }

  render() {
    return (<div className='container'>
      <Button variant='contained' color='primary'>home</Button>
      <Button variant='contained' color='primary'>home</Button>
      <Button variant='contained' color='primary'>home</Button>
      <Button variant='contained' color='primary'>home</Button>
    </div>);
  }
}