    $(document).ready(function () {

        // Build the chart
        $('#pieChart').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: 300,
                height: 300,
                type: 'pie'
            },
            title: {
                text: 'Fullt ös arbetslös'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
             credits: {
                enabled: false
              },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Procentuellt',
                colorByPoint: true,
                data: [{
                    name: 'Kvinnor',
                    color: '#ff4d4d',
                    y: 56.33
                }, {
                    name: 'Män',
                    color: '#0066ff',
                    y: 24.03
                }]
            }]
        });
    });