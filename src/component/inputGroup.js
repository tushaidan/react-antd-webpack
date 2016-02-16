import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { History,browserHistory,Route } from 'react-router'
import request from '../common/request';
import mainHeaderNav from '../component/mainHeaderNav';
const FormItem = Form.Item;

let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
    /*this.history.pushState(null, '/foo')
    this.history.replaceState(null, 'bar')
    this.history.goBack()*/
    request("../src/data/apps.json").done(data => {
      this.props.history.pushState(null, '/Nav');
    })
    
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (
        <Form inline onSubmit={this.handleSubmit}>
          <FormItem
            label="账户：">
            <Input placeholder="请输入账户名"
              {...getFieldProps('userName')} />
          </FormItem>
          <FormItem
            label="密码：">
            <Input type="password" placeholder="请输入密码"
              {...getFieldProps('password')} />
          </FormItem>
          <FormItem>
            <label className="ant-checkbox-inline">
              <Checkbox
                {...getFieldProps('agreement')} />记住我
            </label>
          </FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </Form>
    );
  }
});

Demo = Form.create()(Demo);

export default Demo;