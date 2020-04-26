import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import ReactEcharts from 'echarts-for-react';
import { Divider, Avatar, Descriptions } from 'antd';
function IndexPage() {
  var dataBJ = [
    [82, 90, 56, 46, 18, 60, 10]
  ];

  var dataGZ = [
    [40, 60, 70, 90, 27, 70, 10]
  ];

  var dataSH = [
    [88, 66, 53, 20, 75, 81, 90]
  ];

  var lineStyle = {
    normal: {
      width: 1,
      opacity: 0.5
    }
  };

  const option = {
    legend: {
      bottom: 5,
      data: ['本周', '本月', '综合'],
      itemGap: 20,
      textStyle: {

        fontSize: 14
      },
      selectedMode: 'single'
    },
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
            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
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
      },
      {
        name: '本月',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataSH,
        symbol: 'none',
        itemStyle: {
          color: '#B3E4A1'
        },
        areaStyle: {
          opacity: 0.5
        }
      },
      {
        name: '综合',
        type: 'radar',
        lineStyle: lineStyle,
        data: dataGZ,
        symbol: 'none',
        itemStyle: {
          color: 'rgb(238, 197, 102)'
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
      <div>
        <Avatar shape="square" icon={require('../../assets/logo.jpg')} />
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
