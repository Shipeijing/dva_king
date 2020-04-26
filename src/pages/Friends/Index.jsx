import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import { Card, Avatar, Popover, Button, Divider } from 'antd';
import { EditOutlined, SettingOutlined, MessageOutlined } from '@ant-design/icons';

const { Meta } = Card;
function IndexPage() {
  const dataList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  const content = (
    <div>
      <Button type="link">
        我没用
    </Button>
      <Divider style={{ margin: '5px' }} />
      <Button type="link" danger>
        不再关注
    </Button>
    </div>
  );
  return (
    <div className={styles.index}>
      {dataList.map(item =>
        <div>
          <Card
            hoverable={'ture'}
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <MessageOutlined style={{ color: '#a0d911' }} key="setting" />,
              <EditOutlined style={{ color: '#fadb14' }} key="edit" />,
              <Popover content={content} placement="rightBottom">
                <SettingOutlined style={{ color: '#1890ff' }} key="ellipsis" /></Popover>
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card></div>)}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
