import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import ReactEcharts from 'echarts-for-react';
import { Divider } from 'antd';
function IndexPage() {
  var dataBJ = [
    [82, 90, 56, 46, 18, 60, 10]
  ];

  var lineStyle = {
    normal: {
      width: 1,
      opacity: 0.5
    }
  };

  const option = {
    radar: {
      indicator: [
        { name: '活力', max: 100 },
        { name: '勇气', max: 100 },
        { name: '智慧', max: 100 },
        { name: '统治', max: 100 },
        { name: '阳光', max: 100 },
        { name: '温暖', max: 100 }
      ],
      shape: 'circle',
      splitNumber: 5,
      name: {
        textStyle: {
          color: 'rgb(238, 197, 102)'
        }
      },
      splitLine: {
        lineStyle: {
          color: [
            'rgba(238, 197, 102, 0.2)', 'rgba(238, 197, 102, 0.3)',
            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
          ].reverse()
        }
      },
      splitArea: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(238, 197, 102, 0.5)'
        }
      }
    },
    series: [
      {
        name: '本周',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: 'none',
        itemStyle: {
          color: '#F9713C'
        },
        areaStyle: {
          opacity: 0.5
        }
      }
    ]
  };
  return (
    <div className={styles.index}>
      <div>
        <ReactEcharts
          option={option}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <Divider type='vertical'></Divider>
      <div className={styles.indexBody}>
        <img src={require('../../assets/logo.jpg')} alt="" />
        <ul>
          <li>王富贵</li>
          <li>ID: 188236521145</li>
          <li>24岁<Divider type='vertical' />江苏 · 南京<Divider type='vertical' />男</li>
          <li>人生自古谁五四大师风范个外国俄国俄国而我国而我国额个个外国俄国额外各位各位个个五个</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
