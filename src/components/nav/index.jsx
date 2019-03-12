import React from 'react';
import {isDev} from '../../utils/properties';
import {Link, withRouter} from 'react-router-dom';
// 需要引入 withRouter方可手动跳转
import {routes} from '../../utils/routers';
import './index.scss';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

class Index extends React.Component {
  state = {
    isDev,
    routes,
    defaultActive: '0',
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let that = this;
    routes.forEach((item, index) => {
      if (item.path === that.props.history.location.pathname) {
        that.setState({
          defaultActive: index.toString(),
        });
      }
    });
  }

  render() {

    const navItem = this.state.routes.map(
      (item, index) => {
        return (
          <ListItem key={index}>
            <Link to={`${item.path}`}>
              <ListItemText primary={item.label}/>
            </Link>
          </ListItem>
        );
      });
    return (<div>
      <Drawer className={this.props.className} classes={this.props.classes}
              variant='permanent' open={this.props.sideBarOpen}>
        <List>
          {navItem}
        </List>
      </Drawer>
    </div>);
  }

  handleNavigate(index) {
    // this.props.history.push(routes[Number(index)].path); // 手动跳转
  }
}

export default withRouter(Index);