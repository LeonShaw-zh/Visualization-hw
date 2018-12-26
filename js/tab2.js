var tab = echarts.init(document.getElementById('tab'));

function initialTab(){
    var years = [];
    for (var year in inf[0]){
        if(year != "__EMPTY"){
            years = years.concat(year);
        }
    }
    var names = [];
    var series = [];
    for(var city in inf){
        var name = inf[city].__EMPTY;
        names = names.concat(name);
        var income = [];
        var outcom = [];
        for(var year in years){
            if(year != "__EMPTY"){
                income = income.concat((inf[city][years[year]])?inf[city][years[year]]:0);
                outcom = outcom.concat((outf[city][years[year]])?-outf[city][years[year]]:0);
            }
        }
        flag = true;
        var serie1 = {"name": name+"财政收入","type": 'bar',"stack": 'fin',
                        "label": {
                            "normal": {
                                "show": true,
                                "position": 'ouside',
                                "formatter": ''
                            }
                        },
                        "data":income
                    };
        series = series.concat(serie1);
        var serie2 = {"name": name+"财政支出","type": 'bar',"stack": 'fin',
                        "label": {
                            "normal": {
                                "show": true,
                                "position": 'ouside',
                                "formatter": ''
                            }
                        },
                        "data":outcom
                    };
        series = series.concat(serie2);
    }
    var legend = [];
    for(var name in names){
        legend = legend.concat(names[name]+"财政收入");
        legend = legend.concat(names[name]+"财政支出");
    }

    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            data: years
        },
        yAxis: {
            type: 'value'
        },
        series: series
    };
    tab.setOption(option);
}

function initialPie(){}
