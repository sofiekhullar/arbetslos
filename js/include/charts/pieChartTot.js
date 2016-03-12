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

$('#columnChart').highcharts({
        chart: {
            type: 'column'
        },
            credits: {
                enabled: false
        },
        title: {
            text: 'Fullt ös arbetslös'
        },
        xAxis: {
            categories: [
                'Totalt',
                'Unga',
                'Studie skuld'                         
                 ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Antal personer'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} Personer</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Kvinnor',
            color: '#ff4d4d',
            data: [49.9, 71.5, 123]

        }, {
            name: 'Män',
            color: '#0066ff',
            data: [83.6, 200.8, 140]
            }]
    });

    });

