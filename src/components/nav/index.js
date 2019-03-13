import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {isDev} from '../../utils/properties';
import {Link, withRouter} from 'react-router-dom';
// 需要引入 withRouter方可手动跳转
import {routes} from '../../utils/routers';
import './index.scss';
import {
  Drawer, IconButton,
  List,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
  Icon,
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
} from '@material-ui/icons';
import {drawerWidth} from '../../utils/utils';

const styles = theme => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  link: {
    textDecoration: 'none',
  },
  icon: {
    marginLeft: theme.spacing.unit,
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
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class Index extends React.Component {
  state = {
    isDev,
    routes,
    defaultActive: '0',
  };

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
    const {classes, theme} = this.props;
    const navItem = this.state.routes.map((item, index) => {
      return (
        <Link to={`${item.path}`} className={classes.link} key={index}>
          <ListItem>
            <ListItemIcon>
              {
                typeof item.icon === 'string' ?
                  <Icon className={classNames(classes.icon, item.icon)}/> :
                  <item.icon className={classNames(classes.icon)}/>
              }
            </ListItemIcon>
            <ListItemText primary={item.label}/>
          </ListItem>
        </Link>
      );
    });
    return (<div>
      <Drawer
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: this.props.open,
          [classes.drawerClose]: !this.props.open,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: this.props.open,
            [classes.drawerClose]: !this.props.open,
          }),
        }}
        variant='permanent' open={this.props.open}>
        <div className={classes.toolbar}>
          <IconButton onClick={this.toggleSideBar}>
            <ChevronLeftIcon/>
          </IconButton>
        </div>
        <Divider/>
        <List>
          {navItem}
        </List>
      </Drawer>
    </div>);
  }

  toggleSideBar = () => {
    this.props.onToggle();
  };
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, {withTheme: true})(Index));