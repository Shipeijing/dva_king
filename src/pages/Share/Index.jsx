import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import { List, Radio, PageHeader, Input, Divider, Tooltip, Avatar, Button } from 'antd';
import { MessageOutlined, LikeOutlined, FormOutlined, StarOutlined } from '@ant-design/icons';
import Comment from './components/Comment'
import SetDrawer from './components/SetDrawer'
import { readFileSync } from 'fs';
const { Search } = Input;
const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
function IndexPage(props) {

  const open = (e) => {
    props.dispatch({
      type: 'Share/changebodyStatus',
      payload: e
    })
  }
  const IconText = ({ icon, text }) => (
    <span>
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </span>
  );
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }
  let setDrawerDom = {}
  return (
    <div><SetDrawer setDrawerDom={(data) => { setDrawerDom = data }}></SetDrawer>
      <div className={styles.index}>

        <div className={styles.indexNav}>
          <div>
            <Radio.Group size={'middle'} onChange={onChange} defaultValue="a" buttonStyle="solid">
              <Radio.Button value="a">热点</Radio.Button>
              <Radio.Button value="b">最新</Radio.Button>
            </Radio.Group>
          </div>
          <div>
            <Search
              size={'middle'}
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: '100%' }}
            /></div>
          <div>
            <Tooltip title="发布动态">
              <Button size={'middle'} onClick={() => { setDrawerDom.changeVisible() }} type="primary" shape="circle" icon={<FormOutlined />} />
            </Tooltip>
          </div>
        </div>
        <div>{props.bodyStatus === null ?
          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            footer={
              <div>
                <b>ant design</b> footer part
            </div>
            }
            renderItem={item => (
              <List.Item
                onClick={() => { open(item) }}
                style={{ cursor: 'pointer' }}
                key={item.title}
                actions={[
                  <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                  <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                  <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={item.title}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />
          :
          <div>
            <PageHeader
              style={{ borderBottom: '1px solid #d9d9d9' }}
              onBack={() => { open(null) }}
              title={props.bodyStatus.title}
              subTitle={props.bodyStatus.description}
            />
            <p className={styles.bodyContent}>{props.bodyStatus.content}</p>
            <Divider />
            <Comment />

          </div>

        }

        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const data = state.Share
  return { bodyStatus: data.bodyStatus };
}
export default connect(mapStateToProps)(IndexPage);
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};