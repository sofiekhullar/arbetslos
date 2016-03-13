function createCharts3() {

    //if(first) {
	 // Skapa cirkeldiagram för totalt antal arbetslösa
        test = $('#pieChartParti').highcharts({
            chart: {
                style: {
                    fontFamily: 'Helvetica'
                },
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Valresultat'
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
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            animation: false,
            series: [{
                name: 'Procentuellt',
                colorByPoint: true,
                data: [{
                    name: 'M',
                    color: '#33ccff',
                    y: (getLan(SELECTED_LAN_ID).m)
                },
                {
                    name: 'C',
                    color: '#00b33c',
                    y: (getLan(SELECTED_LAN_ID).c)
                },
                {
                    name: 'FP',
                    color: '#005ce6',
                    y: (getLan(SELECTED_LAN_ID).fp)
                },
                {
                    name: 'KD',
                    color: '#0047b3',
                    y: (getLan(SELECTED_LAN_ID).kd)
                },
                {
                    name: 'MP',
                    color: '#9933ff',
                    y: (getLan(SELECTED_LAN_ID).mp)
                }, {
                    name: 'S',
                    color: '#ff5c33',
                    y: (getLan(SELECTED_LAN_ID).s)
                },
                {
                    name: 'V',
                    color: '#ff0000',
                    y: (getLan(SELECTED_LAN_ID).v)
                },
                {
                    name: 'SD',
                    color: '#ffff00',
                    y: (getLan(SELECTED_LAN_ID).sd)
                },]
            }]
        });
        //first = false;
    /*} else {

        console.log("Hjsan");
        console.log(test)
        console.log($('pieChartParti').highcharts.series[0])

        $('pieChartParti').change(function(){
          // ...
          chart.series[0].setData('M', '#33ccff', 50);
          // ...
          chart.redraw();
        }
    }*/
    
}