import React from 'react';
import { Menu, Button,Breadcrumb, Icon,Carousel}  from 'antd';

const mainHeaderNav = React.createClass({

	handleInClick(e) {
	    /*if(e.key == 0){
	    	this.props.history.replaceState(null, '/');
	    }else if(e.key){

	    }else if(e.key == 4){
	    	 this.props.history.pushState(null, '/signIn');
	    }*/
	    switch(parseInt(e.key)){
	    	case 0:this.props.history.replaceState(null, '/');break;
	    	case 1:this.props.history.replaceState(null, '/');break;
	    	case 2:this.props.history.replaceState(null, '/');break;
	    	case 3:this.props.history.replaceState(null, '/');break;
	    	case 4:this.props.history.pushState(null, '/signIn');break;
	    	default:break;
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
			            <Menu.Item key="1">导航一</Menu.Item>
			            <Menu.Item key="2">导航二</Menu.Item>
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
			      <div style={{paddingTop:'20%',paddingLeft:'40%',width:'50%'}}>
					{this.props.children}
			      </div>
			      </div>
			</div>
		</div> 
	}
});

export default mainHeaderNav;