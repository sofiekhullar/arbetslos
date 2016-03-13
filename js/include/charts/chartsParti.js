function createCharts3() {

/////// FUL-HAXX! ///////////
 $('#barChart').highcharts({
        chart: {
        style: {
                fontFamily: 'Helvetica'
        },
            type: 'bar'
        },
        title: {
            text: 'Skillnad mellan kvinnor och män i länet'
        },
        xAxis: {
            categories: ['Personer med studieskuld', 'Studieskuld i kronor', 'Arbetslösa alla åldrar', 'Unga arbetslösa']
        },
        credits: {
            enabled: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Procent'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                animation: false,
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Män',
            color: '#33adff',
            data: [getLan(SELECTED_LAN_ID).n_man_studieskuld,
                    getLan(SELECTED_LAN_ID).studieskuld_man,
                    getLan(SELECTED_LAN_ID).n_man_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_man_arbetslosa]
        }, {
            name: 'Kvinnor',
            color: '#ff8080',
            data: [getLan(SELECTED_LAN_ID).n_kvinnor_studieskuld,
                    getLan(SELECTED_LAN_ID).studieskuld_kvinnor,
                    getLan(SELECTED_LAN_ID).n_kvinnor_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_kvinnor_arbetslosa]
        }]
    });
/////////////////

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
                    color: '#3385ff',
                    y: (getLan(SELECTED_LAN_ID).fp)
                },
                {
                    name: 'KD',
                    color: '#0047b3',
                    y: (getLan(SELECTED_LAN_ID).kd)
                },
                {
                    name: 'MP',
                    color: '#336600',
                    y: (getLan(SELECTED_LAN_ID).mp)
                }, {
                    name: 'S',
                    color: '#ff0000',
                    y: (getLan(SELECTED_LAN_ID).s)
                },
                {
                    name: 'V',
                    color: '#990000',
                    y: (getLan(SELECTED_LAN_ID).v)
                },
                {
                    name: 'SD',
                    color: '#ffc61a',
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