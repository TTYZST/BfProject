<template>

<div class="real-time">
		<!-- 第一个设备 -->
		<div class="row">
			<h2 class="col-md-10 col-md-offset-2">A1</h2>

			<!-- 最新数据显示 -->
			<div class="col-md-4 col-md-offset-2">

				<table border="">
					<tr>
						<td>名称</td>
						<td>地址</td>
						<td>状态</td>
						<td>值</td>
						<td>单位</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
					</tr>
				</table>
			</div>

			<!-- 折线图 -->
			<div class="col-md-4">
				<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
			</div>
			
		</div><!-- 第一个设备显示结束 -->

		<!-- 第二个设备 -->
		<div class="row">
			<h2 class="col-md-10 col-md-offset-2">A1</h2>

			<!-- 最新数据 -->
			<div class="col-md-4 col-md-offset-2">

				<table border="">
					<tr>
						<td>名称</td>
						<td>地址</td>
						<td>状态</td>
						<td>值</td>
						<td>单位</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
					</tr>
				</table>
			</div>

			<!-- 折线图 -->
			<div class="col-md-4 myChart">
				<div id="myChart" :style="{width: '300px', height: '200px'}"></div>
			</div>
			
		</div><!-- 第二个设备显示结束 -->

	</div><!-- real-time -->
</template>
<script>
	export default{
	data () {
    	return {
      		msg: 'Welcome to Your Vue.js App'
    	}
  	},
  	mounted(){
    	this.drawLine();
  	},
  	methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))

	        // 绘制图表
	        myChart.setOption({
	            tooltip: {
	        trigger: 'none',
	        axisPointer: {
	            type: 'cross'
		        }
		    },

		    grid: {
		        top: 70,
		        bottom: 50
		    },
		    xAxis: [
		        {
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine: {
		                onZero: false,
		            },
		            axisPointer: {
		                label: {
		                    formatter: function (params) {
		                        return params.value
		                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
		                    }
		                }
		            },
		            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value'
		        }
		    ],
		    series: [
		        
		        {
		            name:'2016',
		            type:'line',
		            smooth: true,
		            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
		        }
		    ]
		    });
		}
  	}
}
</script>
<style>
	.real-time {
		margin-top: 50px;
	}
	/*设置表格样式*/
	.real-time table{
		margin-top: 120px;
	}
	.real-time td{
		width: 10%;
		height: 40px;
		text-align: center;
	}

</style>