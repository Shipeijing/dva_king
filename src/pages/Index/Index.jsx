import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import { Input } from 'antd';
import { ArrowUpOutlined, UserAddOutlined } from '@ant-design/icons';
const { Search } = Input;
function IndexPage(props) {

  let dataList = [{ name: '在线人数', num: 11 }, { name: '匹配中', num: 11 }, { name: '队伍中', num: 11 }]
  return (
    <div className={styles.index}>
      <div className={styles.indexNav}>
        <Search
          size={'large'}
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: '100%' }}
        />
      </div>
      <div>
        <div className={styles.nav}>
          <ul>
            {dataList.map(item =>
              <li>{item.name}:{item.num}</li>
            )}
          </ul>
        </div>
        <h1>游乐场 · Demo</h1>
        <h4>大方的分大苏打我额个，各位各位各位为和</h4>
        <ul>
          <li>聊一聊</li>
          <span>&</span>
          <li>看动态</li>
        </ul>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
