import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import "./index.css"

interface Props{
    form:WrappedFormUtils,
    abc?: string
}
class LoginPage extends React.Component<Props>{
    
    handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                validateTrigger:"onBlur",
                rules: [
                    { required: true, message: 'Please input your username!' },
                    {validator:(ruler,value,callback)=>{
                        if(/[a-2]{5, 20}/.test(value)){
                            callback()
                        }else{
                            callback("Please input valid username!")
                        }
                    }}
                ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                validateTrigger:"onBlur",
                rules: [
                    { 
                        validator:(ruler,value,callback)=>{
                            if(/^(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)){
                                callback()
                            }else{
                                callback("Please input valid password!")
                            }
                        }
                     }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        );
      }
    }
}

export default Form.create()(LoginPage);

