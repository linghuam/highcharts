$(function () {
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },

        plotOptions: {
            pie: {
                borderWidth: 3
            }
        },

        series: [{
            data: [
                ['Firefox',   44.2],
                ['IE7',       26.6],
                ['IE6',       20],
                ['Chrome',    3.1],
                ['Other',    5.4]
            ]
        }]
    });
});