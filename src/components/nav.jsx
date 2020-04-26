import React, { useState, useEffect } from 'react';
import { routerRedux } from 'dva/router';
import styles from '../styles/nav.less'
import NProgress from 'nprogress';
import { connect } from 'dva';
import { Menu, Select, Avatar, Badge, Input } from 'antd';
import {
    FlagOutlined,
    MessageOutlined,
    FireOutlined,
    TeamOutlined,
    BellOutlined,
    LineChartOutlined
} from '@ant-design/icons';
const { Option } = Select;
const { Search } = Input;
NProgress.configure({ showSpinner: false })
function NavPage(props) {
    const [current, setCurrent] = useState('/index')
    const [resize, setResize] = useState('')
    const handleClick = e => {
        NProgress.start();
        if (e.key === '/') {
            e.key = '/index'
        }
        setCurrent(e.key);
        const key = e.key === '/index' ? '/' : e.key
        props.dispatch(routerRedux.push(key))
        NProgress.done();
        if (!props.loading.global) {
            // NProgress.done();
        }
    };
    useEffect(() => {
        const e = { key: window.location.pathname }
        if (e.key !== current && e.key !== '/') {
            handleClick(e)
        }
        window.addEventListener('resize', (e) => {
            if (e.target.innerWidth < 1250) setResize('none')
            else setResize('')
        })
    });
    return (
        <div className={styles.MenuCenter}>
            <div style={{ minWidth: resize === 'none' ? '80px' : '220px' }}>
                <span>
                    <img src={require('../assets/yay.jpg')} alt="" />
                    <h1 style={{ display: resize }}>游乐场_Demo</h1>
                </span>
            </div>
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal">
                <Menu.Item key="/index">
                    <FlagOutlined />
                    主页
        </Menu.Item>
                <Menu.Item key="/Chat">
                    <MessageOutlined />
                    消息
        </Menu.Item>
                <Menu.Item key="/Share">
                    <FireOutlined />
                    动态
        </Menu.Item>
                <Menu.Item key="/Friends">
                    <TeamOutlined />
                    关注
        </Menu.Item>
                <Menu.Item key="/Statistics">
                    <LineChartOutlined />
                    数据
        </Menu.Item>
            </Menu>
            <div style={{ minWidth: resize === 'none' ? '230px' : '420px' }}>
                <Search
                    style={{ display: resize }}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    className={styles.inputNav}
                />

                <div>
                    <div onClick={() => { handleClick({ key: '/User' }) }}>
                        <span className="avatar-item">
                            <Avatar icon={require('../assets/logo.jpg')} />
                        </span>
                        <span style={{ marginLeft: 10 }}>
                            王富贵
                </span>
                    </div>
                    <Select defaultValue="测试类型" style={{ width: 100 }} bordered={false}>
                        <Option value="jack">Jack</Option>
                    </Select>
                    <Badge dot={true} count={1}>
                        <BellOutlined style={{ fontSize: 20 }} />
                    </Badge>
                </div>
            </div>
        </div>
    )
}
export default connect(({ loading }) => ({ loading }))(NavPage)
