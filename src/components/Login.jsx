import React, { useState } from 'react';
import { routerRedux } from 'dva/router';
import { connect } from 'dva';
import { Form, Input, Steps, Button, Checkbox, Divider } from 'antd';
import styles from '../styles/login.less'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Step } = Steps;
function index(props) {
    const [pwd, setPwd] = useState(0)
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const Login =
        <div>
            <h1>欢迎登录</h1>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="手机号"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={props.formData.Uid} prefix={<UserOutlined />} />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={props.formData.Pwd} prefix={<LockOutlined />} />
                </Form.Item>

                <Form.Item style={{ textAlign: 'left' }} name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button onClick={() => {
                        props.dispatch({
                            type: 'UserActive/login',
                            data: props.formData
                        })
                    }} style={{ width: '100%' }} type="primary" htmlType="submit">
                        提交
              </Button>
                </Form.Item>
            </Form>
            <div>
                <span style={{ cursor: 'pointer' }} onClick={() => {
                    props.dispatch({
                        type: 'UserActive/setStatus',
                        data: 2
                    })
                }}>立即注册</span><Divider type="vertical" /><span style={{ cursor: 'pointer' }} onClick={() => {
                    props.dispatch({
                        type: 'UserActive/setStatus',
                        data: 1
                    })
                }}>忘记密码</span>
            </div>
        </div>
    const Registered = <div>
        <h1>{props.status === 1 ? '找回密码' : '注册账号'}</h1>
        <Steps style={{ textAlign: 'left', width: '70%', margin: '20px auto' }} current={pwd}>
            <Step title="验证手机号" icon={<UserOutlined />} />
            <Step title="输入密码" icon={<LockOutlined />} />
        </Steps>
        {pwd === 1 ? <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        ><Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
                <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item
                label="确认密码"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item style={{ marginTop: 40 }}>
                <Button onClick={() => {
                    props.dispatch({
                        type: 'UserActive/setStatus',
                        data: 0
                    })
                }} style={{ width: '100%' }} type="primary" htmlType="submit">
                    提交
          </Button>
            </Form.Item>
        </Form> : <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        ><Form.Item
            label="手机号"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
                    <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                    label="验证码"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input style={{ width: 320, marginRight: 18 }} /><Button>获取验证码</Button>
                </Form.Item>

                <Form.Item style={{ marginTop: 40 }}>
                    <Button onClick={() => { setPwd(1) }} style={{ width: '100%' }} type="primary" htmlType="submit">
                        验证
          </Button>
                </Form.Item>
            </Form>}
        <div>
            <span style={{ cursor: 'pointer' }} onClick={() => {
                props.dispatch({
                    type: 'UserActive/setStatus',
                    data: 0
                })
            }}>去登录 >>></span>
        </div>
    </div>
    return (
        <div className={styles.index}>
            {props.status === 0 ? Login : Registered
            }
        </div>
    )
}

function mapStateToProps(state) {
    const store = state.UserActive
    return {
        status: store.status,
        formData: store.formData
    }
}
export default connect(mapStateToProps)(index)