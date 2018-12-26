var tab = echarts.init(document.getElementById('tab'));

function initialTab(){
    var names = [];
    var flag = false, years = [];
    var sum = {};
    var series = [];
    for(var city in GDP){
        var name = GDP[city].__EMPTY;
        names = names.concat(name);
        var data = [];
        for(var year in GDP[city]){
            if(GDP[city][year] != name){
                data = data.concat(GDP[city][year]);
                if(!flag){
                    years = years.concat(year);
                    sum[year] = GDP[city][year];
                }else
                    sum[year] += GDP[city][year];
            }
        }
        flag = true;

        var serie = {"name": name,"type": 'bar',"stack": 'GDP',
                        "label": {
                            "normal": {
                                "show": true,
                                "position": 'ouside',
                                "formatter": ''
                            }
                        },
                        "data":data
                    };
        series = series.concat(serie);
    }
    // var sumdata = [];
    // for(var k in sum)
    //     sumdata = sumdata.concat(sum[k]);
    // series = series.concat({
    //     "name": '总计',
    //     "type": 'bar',
    //     "stack": '总计',
    //     "barGap": '-100%',
    //     "label": {
    //         "normal": {
    //             "show": true,
    //             "position": 'right',
    //             "textStyle": { "color": '#000' },
    //             "formatter": function(v) {
    //                 return "总计：" + (v.value)
    //             }
    //         }
    //     },
    //     "itemStyle": { 
    //         "normal": { 
    //             "color": 'rgba(128, 128, 128, 0)',
    //             "borderWidth": 1,
    //             "borderColor": '#1FBCD2'
    //         } 
    //     },
    //     "data": sumdata
    // });

    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: names
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: years
        },
        series: series
    };
    tab.setOption(option);
}
