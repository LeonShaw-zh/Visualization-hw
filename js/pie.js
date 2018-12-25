var pie = echarts.init(document.getElementById('pie'));
var currentTime = 2017;
var data = [];

function initialPie(){
    pie.setOption({
        title : {
            text: currentTime+'年浙江省城市GDP',
            subtext: '饼状图分析',
            x:'center'
        },
        legend: {
            // type: 'scroll',
            orient: 'vertical',
            right: 'right',
            data: data.legendData,
            selected: data.selected
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series : [{
            name: currentTime+'年GDP',
            type: 'pie',
            radius: '55%',
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
                    formatter: '{b}\n{c}\n{d}%',
                    textStyle : {                   
                        align : 'center',
                        baseline : 'middle',
                        fontFamily : '微软雅黑',
                        fontSize : 15,
                        fontWeight : 'bolder'
                    }
                }
            }    
        }]
    });
    document.getElementById('pie').onmousewheel = pieScroll;
    flushPie();
}

function flushPie(){
    var tem = [];
    for(var city in GDP){
        var name = GDP[city].__EMPTY;
        var value = GDP[city][currentTime];
        tem = tem.concat({"value":value, "name":name});
    }
    data = tem;

    var option = pie.getOption();
    option.title[0].text = currentTime+'年浙江省城市GDP';
    option.series[0].data = data;
    option.series[0].name = currentTime+'年GDP';
    pie.setOption(option); 
}

function pieScroll(e){
    // console.log(e.wheelDelta);
    currentTime = currentTime + parseInt(e.wheelDelta/100);
    currentTime = Math.min(currentTime, 2017);
    currentTime = Math.max(currentTime, 2001);
    flushPie();
}

