import React from 'react';
import { connect } from 'dva';
import styles from './style.less';

function IndexPage() {
  return (
    <div className={styles.normal}>
      wo
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
