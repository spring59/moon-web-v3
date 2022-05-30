<template>
  <div id="myChart123" :style="{width: '1500px', height: '550px'}"></div>
</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
import {onMounted} from "vue";

export default {
  setup() {
    onMounted(() => { // 需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.getElementById("myChart123"));
      // 绘制图表
      myChart.setOption({
        xAxis: {
          data: ["4-3", "4-4", "4-5", "4-6", "4-7", "4-8", "4-9"]
        },
        yAxis:{},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [8, 15, 31, 13, 15, 22, 11]
          }
        ]
      });
      window.onresize = function () { // 自适应大小
        myChart.resize();
      };
    });
  }
}
</script>