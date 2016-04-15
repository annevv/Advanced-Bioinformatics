$(function () {
    $('#container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Most used search terms in Bangladesh'
        },
        subtitle: {
            text: 'Source: Pornhub.com/insights'
        },
        xAxis: {
            categories: ['2009', '2010', '2011', '2012', '2013', '2014', '2015'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function () {
                    return this.value/100 ;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' million hits'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 0.5,
                marker: {
                    lineWidth: 0.5,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Teen',
            data: [502, 635, 809, 947, 1402, 3634, 2068]
        }, {
            name: 'Lesbian',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Gerbilling',
            data: [163, 760, 1253, 3364, 1002, 729, 628]
        }, {
            name: 'MILF',
            data: [18, 31, 54, 156, 339, 1218, 1201]
        }, {
            name: 'BDSM',
            data: [400, 450, 820, 940, 530, 300, 460]
         }, {
            name: 'Other',
            data: [200, 270, 254, 301, 206, 305, 230]
        }]
    });
});