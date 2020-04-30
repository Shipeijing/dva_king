import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import echarts from 'echarts';
import { Input } from 'antd';
import { ArrowUpOutlined, UserAddOutlined } from '@ant-design/icons';
import ReactEcharts from 'echarts-for-react';
const { Search } = Input;
function IndexPage(props) {
  var base = +new Date(2016, 9, 3);
  var oneDay = 24 * 3600 * 1000;
  var valueBase = Math.random() * 300;
  var valueBase2 = Math.random() * 50;
  var data = [];
  var data2 = [];

  for (var i = 1; i < 10; i++) {
    var now = new Date(base += oneDay);
    var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');

    valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
    valueBase <= 0 && (valueBase = Math.random() * 300);
    data.push([dayStr, valueBase]);

    valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
    valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
    data2.push([dayStr, valueBase2]);
  }

  const option = {
    animation: false,
    title: {
      left: 'right',
      text: '全天在线人数',
      subtext: '展示一天在线人数男女比例占比',
    },
    legend: {
      top: 'bottom',
      data: ['意向']
    },
    tooltip: {
      triggerOn: 'none',
      position: function (pt) {
        return [pt[0], 130];
      }
    },
    xAxis: {
      type: 'time',
      // boundaryGap: [0, 0],
      axisPointer: {
        value: '2016-10-7',
        snap: true,
        lineStyle: {
          color: '#434343',
          opacity: 0.5,
          width: 1
        },
        label: {
          show: true,
          formatter: function (params) {
            return echarts.format.formatTime('yyyy-MM-dd', params.value);
          },
          backgroundColor: '#434343'
        },
        handle: {
          show: true,
          color: '#434343'
        }
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      axisLine: {       //y轴
        show: false
      },
      type: 'value',

      splitLine: {
        show: false
      },
      z: 10
    },
    grid: {
      top: 50,
      left: 30,
      right: 15
    },
    dataZoom: [{
      type: 'inside',
      throttle: 50
    }],
    series: [
      {
        name: '模拟数据',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#eb2f96'
        },
        stack: 'a',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#eb2f96'
          }, {
            offset: 1,
            color: '#ffd6e7'
          }])
        },
        data: data
      },
      {
        name: '模拟数据',
        type: 'line',
        smooth: true,
        stack: 'a',
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
          color: '#1890ff'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#1890ff'
          }, {
            offset: 1,
            color: '#bae7ff'
          }])
        },
        data: data2
      }

    ]
  };

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
          <ReactEcharts
            option={option}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <h1>游乐场 · Demo</h1>
        <h4>大方的分大苏打我额个，各位各位各位为和</h4>
        <ul>
          <li>一对一</li>
          <span>&</span>
          <li>多人群</li>
        </ul>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
