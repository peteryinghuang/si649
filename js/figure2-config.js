var myChart = echarts.init(document.getElementById('pie00'));
option = {
	title: {
		        text: 'Figure 2: Contribution Rates of the "Dream Teams" to Their Sports', // 标题文本
		        bottom:'0%',
		        textStyle: {
            // 设置字体大小和颜色
		            color: 'rgba(0, 0, 0, 0.65)', // 假设饼图中文字的颜色是深灰色
		            fontSize: 14
        		},
		        left: 'center' // 水平居中
    },
	series: [
		{
			name: 'table tennis2',
			type: 'pie',
			radius : '35%',
			center: ['12%', '30%'],
			stack: 'Total',
			label:{
						normal: {
										show: true,
										position: 'insideRight'
						}
			},
			data: [{value:67.54, name:'China – CCR: 67.54%'},
					{value:13.16, name:'Korea'},
					{value:3.07, name:'Sweden'},
					{value:16.23, name:'Others'},
			]
		},
		{
			name: 'diving2',
			type: 'pie',
			radius : '35%',
			center: ['40%', '70%'],
			stack: 'Total',
			label:{
						normal: {
										show: true,
										position: 'insideRight'
						}
			},
			data: [{value:38.30 , name:'USA'},
					{value:23.29 , name:'China Diving:23.29% ', bottom: '5%'},
					{value:6.38 , name:'Sweden'},
					{value:4.26 , name:'Russia'},
					{value:4.70 , name:'Germany'},
					{value:3.02 , name:'Australia'},
					{value:2.80 , name:'Italy'},
					{value:17.25 , name:'Others'}]
			},
		{
			name: 'archery2',
			type: 'pie',
			radius : '35%',
			center: ['60%', '30%'],
			stack: 'Total',
			label:{
						normal: {
										show: true,
										position: 'insideRight'
						}
			},
			data: [{value:26.53, name:'KoreaArchery:26.53%'},
					{value:19.95, name:'USA'},
					{value:12.47, name:'Belgium'},
					{value:12.02, name:'France'},
					{value:29.02, name:'Others'},]
		},
		{
			name: 'basketball2',
			type: 'pie',
			radius : '35%',
			center: ['80%', '70%'],
			stack: 'Total',
			label:{
						normal: {
										show: true,
										position: 'insideRight'
						}
			},
			data: [{value:47.14, name:'USABasketball:47.14%'},
					{value:2.38, name:'Argentina'},
					{value:50.48, name:'Others'}]
		},
	]
};
myChart.setOption(option);