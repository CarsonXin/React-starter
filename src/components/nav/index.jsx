import React from 'react';
import {isDev} from '../../utils/properties';
import {Menu} from 'element-react/next';
import {Link, withRouter} from 'react-router-dom';
// 需要引入 withRouter方可手动跳转
import {routes} from '../../utils/routers';
import './index.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDev,
      routes,
      defaultActive: '0',
    };
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
          <Menu.Item className="nav-item" key={index} index={index.toString()}>
            {/**推测由于低版本（1.4）的element的原因，没做兼容react-router的处理
             * 跳转需要点中Link标签，否则仅仅样式切换实际并无跳转
             * 可以通过1.手动push path到history 2.增大Link标签点击范围解决
             * */}
            <Link to={`${item.path}`}>{item.label}</Link>
          </Menu.Item>
        );
      });
    return (<div>
      <Menu theme="dark" defaultActive={this.state.defaultActive}
            mode="horizontal" onSelect={this.handleNavigate.bind(this)}>
        {navItem}
      </Menu>
    </div>);
  }

  handleNavigate(index) {
    this.props.history.push(routes[Number(index)].path); // 手动跳转
  }
}

export default withRouter(Index);