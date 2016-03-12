    $(document).ready(function () {

        // Build the chart
        $('#pieChartTot').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Fördelning totalt arbetslösa'
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
    


     // Build the chart
        $('#pieChartUng').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Fördelning av unga arbetslösa'
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

