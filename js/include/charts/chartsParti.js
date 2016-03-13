function createCharts3() {

	 // Skapa cirkeldiagram för totalt antal arbetslösa
        $('#pieChartParti').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Partisympati'
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
                    name: 'M',
                    color: '#33ccff',
                    y: 4
                },
                {
                    name: 'C',
                    color: '#00b33c',
                    y: 4
                },
                {
                    name: 'FP',
                    color: '#005ce6',
                    y: 4
                },
                {
                    name: 'KD',
                    color: '#0047b3',
                    y: 4
                },
                {
                    name: 'P',
                    color: '#9933ff',
                    y: 4
                }, {
                    name: 'S',
                    color: '#ff5c33',
                    y: 2
                },
                {
                    name: 'V',
                    color: '#ff0000',
                    y: 4
                },
                {
                    name: 'SD',
                    color: '#ffff00',
                    y: 4
                },]
            }]
        });
    
}