    function createCharts2() {
    $('#barChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Jämställdhets parametrar??'
        },
        xAxis: {
            categories: ['Studieskuld per person', 'Studieskuld i kronor', 'Totalt arbetslösa', 'Unga arbetslösa']
        },

        yAxis: {
            min: 0,
            title: {
                text: 'Procentuellt??????'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Män',
            color: '#0066ff',
            data: [5, 3, 4, 7]
        }, {
            name: 'Kvinnor',
            color: '#ff4d4d',
            data: [2, 2, 3, 2]
        }]
    });
};