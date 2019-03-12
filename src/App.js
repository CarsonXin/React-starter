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
import {Menu as MenuIcon} from '@material-ui/icons';
import {Router, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {routes} from './utils/routers';
import 'element-theme-default';
import './App.css';

const history = createHistory();

const drawerWidth = 240;

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
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
});

class App extends Component {
  state = {
    sideBarOpen: false,
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

  render() {
    const {classes, theme} = this.props;
    return (
      <div className="App">
        <CssBaseline/>
        <AppBar position='fixed' className={classNames(classes.appBar, {
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
            <Typography variant="h6" color="inherit" noWrap>
              迷你抽屉
            </Typography>
          </Toolbar>
        </AppBar>
        {/*<BrowserRouter basename='/starter'>*/}
        <Router history={history}>
          {/*
          * Router标签内不可有多个子标签
           */}
          <div>
            <Navigator
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: this.state.sideBarOpen,
                [classes.drawerClose]: !this.state.sideBarOpen,
              })}
              classe={{
                paper: classNames({
                  [classes.drawerOpen]: this.state.sideBarOpen,
                  [classes.drawerClose]: !this.state.sideBarOpen,
                }),
              }}
              open={this.state.sideBarOpen}/>
            <main className={classes.content}>
              <div className={classes.toolbar}/>
              {
                routes.map((route, index) => {
                  return (
                    <Route path={route.path} component={route.component}
                           key={index}/>
                  );
                })
              }
            </main>
          </div>
        </Router>
        {/*</BrowserRouter>*/}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {widthTheme: true})(App);
