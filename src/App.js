import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Navigator from './components/nav/index';
import {withStyles} from '@material-ui/core/styles';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
  Notifications as NotificationIcon,
  AccountCircle,
} from '@material-ui/icons';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {routes} from './utils/routers';
import './App.css';
import {drawerWidth} from './utils/utils';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const history = createHistory();

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  options: {
    textAlign: 'right',
    marginRight: 16,
  },
  grow: {
    flexGrow: 1,
  },
});

class App extends Component {
  state = {
    sideBarOpen: false,
    showUserOptions: false,
  };

  constructor(props) {
    super(props);
  }

  toggleSidebar = () => {
    // 使用箭头函数以确定this指向为当前class
    this.setState({
      sideBarOpen: !this.state.sideBarOpen,
    });
  };

  openUserOptions = () => {
    this.setState({
      showUserOptions: !this.state.showUserOptions,
    });
  };

  render() {
    const {classes} = this.props;

    const userOptions = (
        <Menu
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={this.state.showUserOptions}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
        </Menu>
    );

    return (
        <Router history={history}>
          <div className={classes.root}>
            <CssBaseline/>
            <AppBar position='fixed'
                    className={classNames(classes.appBar, {
                      [classes.appBarShift]: this.state.sideBarOpen,
                    })}>
              <Toolbar disableGutters={!this.state.sideBarOpen}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.toggleSidebar}
                    className={classNames(classes.menuButton, {
                      [classes.hide]: this.state.sideBarOpen,
                    })}
                >
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h4" color="inherit" noWrap>
                  School Bus System Admin
                </Typography>
                <div className={classes.grow}>
                  <span aria-hidden> </span>
                </div>
                <div className={classes.options}>
                  <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationIcon/>
                    </Badge>
                  </IconButton>
                  <IconButton aria-haspopup="true"
                              onClick={this.openUserOptions}
                              color="inherit">
                    <AccountCircle/>
                  </IconButton>
                </div>
              </Toolbar>
              {userOptions}
            </AppBar>
            {/*Router标签内不可有多个子标签*/}
            <Navigator open={this.state.sideBarOpen}
                       onToggle={this.toggleSidebar}/>
            <div className={classNames(classes.content, {})}>
              <div className={classes.toolbar}/>
              {/*抵消被顶部占据的空间*/}
              {
                routes.map((route, index) => {
                  return (
                      <Route path={route.path} component={route.component}
                             key={index}/>
                  );
                })
              }
            </div>
          </div>
        </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(App);
