import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import { Avatar, Badge, Input, Button, Divider } from 'antd';
import { SmileOutlined, CloseCircleOutlined, DeleteOutlined, ScissorOutlined, EditOutlined, PictureOutlined } from '@ant-design/icons';
function LeftMessage(item) {
  return (
    <>
      <img src={require('../../assets/logo.jpg')} alt="" />
      <div>这里是一条游泳的消息</div>
    </>

  )
}
function RightMessage(item) {
  return (
    <>

      <div>这里是一条游泳的消息</div>
      <img src={require('../../assets/logo.jpg')} alt="" />
    </>

  )
}
function IndexPage() {
  const datalist = [1, 0, 1, 1, 0, 0, 1, 1, 1]
  return (
    <div className={styles.chat}>
      <div>
        {datalist.map((item, index) =>
          <Badge count={item}>
            <Avatar style={{ width: 50, height: 50 }} src={require('../../assets/logo.jpg')} />
          </Badge>
        )}
      </div>
      <div>
        <div className={styles.chatBody}>
          <div>
            <h4>正在与陈帅对话...</h4>
            <span> <EditOutlined />
              <ScissorOutlined style={{ marginLeft: 10 }} />
              <DeleteOutlined style={{ marginLeft: 10 }} />
              <CloseCircleOutlined style={{ marginLeft: 10 }} /></span>
          </div>
          <Divider style={{ marginTop: 10 }}></Divider>
          <div className={styles.chatMessage}>
            {datalist.map((item, index) => {
              if (index % 2 === 0) {
                return <div style={index % 2 === 0 ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }}>
                  <LeftMessage></LeftMessage>
                </div>
              } else {
                return <div style={index % 2 === 0 ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' }}>
                  <RightMessage></RightMessage>
                </div>
              }
            }
            )}
          </div>
        </div>
        <div className={styles.chatBut}>
          <Button shape="circle" style={{ marginRight: 10 }} type="link" icon={<PictureOutlined />} />
          <Button shape="circle" style={{ marginRight: 10 }} type="link" icon={<SmileOutlined />} />
          <Input
            style={{ marginRight: 10 }}
            placeholder="input search text"
          />
          <Button type="primary"  >发送</Button>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
