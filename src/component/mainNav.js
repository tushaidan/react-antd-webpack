
import React from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router';
import '../styleCss/mycss.css';

const SubMenu = Menu.SubMenu;

const BrowserDemo = React.createClass({
  imgHandleClick(){
    this.props.history.pushState(null,"/");
  },
//class Calendar extends React.Component{}
  render() {
    return <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div onClick={this.imgHandleClick}>
          <img className="mainNavLogo" src="../src/image/logo.png"></img>
        </div>
        <Menu mode="inline" theme="dark"
          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          <SubMenu key="sub1" title={<span><Icon type="user" />导航一</span>}>
            <Menu.Item key="1">选项1</Menu.Item>
            <Menu.Item key="2"><Link to="/Nav/datePicker">选项2</Link></Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />导航二</span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <Menu.Item key="7">选项7</Menu.Item>
            <Menu.Item key="8">选项8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
      <div className="ant-layout-main">
        <div className="ant-layout-header"></div>
        <div className="ant-layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-content">
            <div id="xxx" style={{ height: 590 }}>
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="ant-layout-footer">
            xxxxx
        </div>
      </div>
    </div>;
  }
});

export default BrowserDemo;