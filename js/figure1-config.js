var myChart = echarts.init(document.getElementById('pie0'));
option = {

	title: {
		        text: 'Figure 1: The proportion of gold medals won by the "Dream Team"', // 标题文本
		        bottom:'0.5%',
		        textStyle: {
            // 设置字体大小和颜色
		            color: 'rgba(0, 0, 0, 0.65)', // 假设饼图中文字的颜色是深灰色
		            fontSize: 14
        		},
		        left: 'center' // 水平居中
    },
	series: [
		{
		    name: 'table tennis',
		    type: 'pie',
		    radius : '35%',
		    center: ['10%', '30%'],
		    stack: 'Total',
		    label:{
		        normal: {
		            show: true,
		            position: 'insideRight'
		        }
		    },
		    data: [{value:28, name:'China：87.50%'},
		        {value:3, name:'Korea'},
		        {value:1, name:'Sweden'},
		        {value:0, name:'Others'},
		    ],
            label: { // 单个饼图下方的标题
                text: 'Table Tennis',
                left: 'center',
                top: 'bottom', // 表示标题位于中心底部
			},
		},
		{
			name: 'diving',
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
		    data: [{value:51, name:'USA'},
		        {value:40, name:'China Diving：31.50%'},
		        {value:7, name:'Sweden'},
		        {value:4, name:'Russia'},
		        {value:3, name:'Germany'},
		        {value:3, name:'Australia'},
		        {value:3, name:'Italy'},
		        {value:16, name:'Others'},]
		},
		{
			name: 'archery',
			type: 'pie',
			radius : '35%',
			center: ['55%', '30%'],
			stack: 'Total',
			label:{
						normal: {
										show: true,
										position: 'insideRight'
						}
			},
			data: [{value:23, name:'Korea Archery：35.94%'},
					{value:14, name:'USA'},
					{value:10, name:'Belgium'},
					{value:6, name:'France'},
					{value:11, name:'Others'},]
		},
		{
			name: 'basketball',
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
			data: [{value:23, name:'USABasketball：76.67%'},
					{value:1, name:'Argentina'},
					{value:6, name:'Others：20.00%'}]
		},
	],
	graphic: [ // 自定义图形元素数组需要放在这里
        {
            type: 'text',
            left: '6%', // 根据饼图的中心位置调整
            bottom: 125, // 距离容器底部的距离
            style: {
                text: 'Table Tennis',
                textAlign: 'center',
                fill: '#666',
                fontSize: 14
            }
        },
        {
            type: 'text',
            left: '38%',
            bottom: 20,
            style: {
                text: 'Diving',
                textAlign: 'center',
                fill: '#666',
                fontSize: 14
            }
        },
        // ... 根据需要添加其他文本元素 ...
    ]
};
myChart.setOption(option);