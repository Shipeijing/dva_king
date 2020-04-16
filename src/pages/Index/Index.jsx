import React from 'react';
import { connect } from 'dva';
import styles from './style.less';
import ReactEcharts from 'echarts-for-react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
function IndexPage(props) {
  const CarList = [{
    name: "一对一"
  }, {
    name: "群聊"
  }, {
    name: "开房间"
  }]
  let option = {

    title: {
      text: '位置占比',
      left: 'center',
      top: 0,
      textStyle: {
        color: '#000'
      }
    },

    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 335, name: '上单' },
          { value: 310, name: '打野' },
          { value: 274, name: '中单' },
          { value: 235, name: '射手' },
          { value: 400, name: '辅助' },
          { value: 500, name: '补位' }
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          color: 'rgba(0, 0, 0, 0.7)'
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.7)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return Math.random() * 200;
        }
      }
    ]
  }
  let option1 = {
    title: {
      text: '匹配速度',
      left: 'center',
      top: 0,
      textStyle: {
        color: '#000'
      }
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
      {
        name: '业务指标',
        type: 'gauge',
        detail: { formatter: '{value}%' },
        data: [{ value: 50 }]
      }
    ]
  };
  let dataList=[{name:'在线人数',num:11},{name:'匹配中',num:11},{name:'队伍中',num:11}]
  return (
    <div className={styles.index}>
      <ul>{CarList.map((item, index) => {
        return <li key={index}>{item.name}</li>
      })}
      </ul>
      <div>
        <h4>实时数据台</h4>
        <ul>
          <li>
            <Row gutter={16}>
              <Col span={16}>
                {dataList.map((item,index)=>{
                  return ( <Card>
                    <Statistic
                      title={item.name}
                      value={item.num}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Card>)
                })}
               
              </Col>
            </Row>
          </li>
          <li>
            <ReactEcharts
              option={option1}
              style={{ width: '100%', height: '100%' }}
            />
          </li>
          <li>
            <ReactEcharts
              option={option}
              style={{ width: '100%', height: '100%' }}
            />
          </li>
        </ul>
      </div>

    </div>
  );
}


IndexPage.propTypes = {
};

export default connect()(IndexPage);
