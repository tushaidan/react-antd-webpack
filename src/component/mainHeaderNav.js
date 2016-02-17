import React from 'react';
import {
	Modal, Menu, Button, Breadcrumb, Icon, Carousel,Table 
}
from 'antd';
import request from '../common/request';

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  sorter:true,
  render: function (text) {
    return <a href="#">{text}</a>;
  }
}, {
  title: '年龄',
  dataIndex: 'age'
}, {
  title: '住址',
  dataIndex: 'address'
}];

const mainHeaderNav = React.createClass({
			getInitialState: function() {
				return {
					loading: false,
					visible: false,
					signShow: 'none',
					tableShow:'none',
					tableDate:[],
					pagination:{
					  total: 0,
					  current: 1,
					  showSizeChanger: true,
					  onShowSizeChange: function (current, pageSize) {
					    console.log('Current: ', current, '; PageSize: ', pageSize);
					  },
					  onChange: function (current) {
					    console.log('Current: ', current);
					  }
					}
				}
			},

			handleOk() {
				this.setState({
					loading: true
				});
				setTimeout(() => {
					this.setState({
						loading: false,
						visible: false
					});
				}, 3000);
			},

			handleCancel() {
				this.setState({
					visible: false
				});
			},

			pageChangeHandle(pagination, filters, sorter) {
				const pager = this.state.pagination;
			    pager.current = pagination.current;
			    this.setState({
			      pagination: pager
			    });
			    const params = {
			      pageSize: pagination.pageSize,
			      currentPage: pagination.current,
			      sortField: sorter.field,
			      sortOrder: sorter.order
			    };
			    for (let key in filters) {
			      if (filters.hasOwnProperty(key)) {
			        params[key] = filters[key];
			      }
			    }
			    this.fetch(params);
			},

			fetch(params = {}) {
			    console.log('请求参数：', params);
			    request("../src/data/names.json","POST",params).done(result => {
					control.setState({
						tableDate:result.names,
						pagination:{
							total:result.names.length
						}
					})
				});
			  },

			handleInClick(e) {
				switch (parseInt(e.key)) {
					case 0:
						this.setState({
							tableShow:'none',
							signShow: 'none'
						});
						this.props.history.replaceState(null, '/');
						break;
					case 1:
						this.setState({
							visible: true,
							tableShow:'none',
							signShow: 'none'
						});
						break;
					case 2:
						const control = this;
						this.setState({
							tableShow:'block',
							signShow: 'none'
						});
						request("../src/data/names.json").done(data => {
							control.setState({
								tableDate:data.names,
								pagination:{
									total:data.names.length
								}
							})
						});
						break;
					case 3:
						this.setState({
							tableShow:'none',
							signShow: 'none'
						});
						break;
					case 4:
						this.props.history.pushState(null, '/signIn');
						this.setState({
							tableShow:'none',
							signShow: 'block'
						});
						break;
					default:
						break;
				}
			},

	render() {
		return <div style={{height:'100%'}}>
			<div className="ant-layout-top">
				<div className="ant-layout-header">
			        <div className="ant-layout-wrapper">
			          <img className="mainHeaderNavLogo" src="../src/image/logo.png"></img>
			          <Menu theme="dark" mode="horizontal"
			            defaultSelectedKeys={['0']} style={{lineHeight: '64px',float:'right'}} onClick={this.handleInClick}>
			            <Menu.Item key="0">首 页</Menu.Item>
			            <Menu.Item key="1">弹出窗口</Menu.Item>
			            <Menu.Item key="2">表 格</Menu.Item>
			            <Menu.Item key="3">导航三</Menu.Item>
			            <Menu.Item key="4">登 录</Menu.Item>
			          </Menu>
			        </div>
			      </div>
			      <div style={{paddingTop:"10%",height:'30%'}}>
			      	<Carousel autoplay="true">
					    <div><h1>hello </h1></div>
					    <div><h1>world!</h1></div>
					    <div><h1>by</h1></div>
					    <div><h1>zhuel</h1></div>
					</Carousel>
			      </div>
			      <div style={{height:'100%',width:'100%',background: 'url(../src/image/home.jpg) no-repeat center'}}>
			      <div style={{paddingTop:'20%',paddingLeft:'40%',width:'50%',display:this.state.signShow}}>
					{this.props.children}
			      </div>
			      </div>
			</div>
			<Modal ref="modal"
	          visible={this.state.visible}
	          title="对话框标题" onOk={this.handleOk} onCancel={this.handleCancel}
	          footer={[
	            <Button key="back" type="ghost" size="large" onClick={this.handleCancel}>返 回</Button>,
	            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
	              提 交
	            </Button>
	          ]}>
	          <p>hello</p>
	          <p>world!</p>
	        </Modal>
	        <div style={{display:this.state.tableShow,position:'absolute',top: '32%',left: '26%',width: '50%'}}>
	        	<Table columns={columns} dataSource={this.state.tableDate} pagination={this.state.pagination} onChange={this.pageChangeHandle}/>
	        </div>
		</div> 
	}
});

export default mainHeaderNav;