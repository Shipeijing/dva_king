import React from 'react';
import { connect } from 'dva';
import styles from './style.less';

function IndexPage(props) {
  const CarList = [{
    name: "随机匹配"
  }, {
    name: "寻找队友"
  }, {
    name: "我的房间"
  }]
  return (
    <div className={styles.index}>
      <ul>{CarList.map((item, index) => {
        return <li key={index}>{item.name}</li>
      })}
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
