function createCharts() {


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
/////////////////

        // Skapa cirkeldiagram för totalt antal arbetslösa
        $('#pieChartTotalt').highcharts({
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
                text: 'Totalt arbetslösa'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
             credits: {
                enabled: false
              },
            plotOptions: {
                pie: {
                    animation: false,
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
                    color: '#ff8080',
                    y: getLan(SELECTED_LAN_ID).n_kvinnor_arbetslosa
                }, {
                    name: 'Män',
                    color: '#33adff',
                    y: getLan(SELECTED_LAN_ID).n_man_arbetslosa
                }]
            }]
        });
    

     // Skapa cirkeldiagram för totalt antal unga arbetslösa
        $('#pieChartUnga').highcharts({
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
                text: 'Unga arbetslösa'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
             credits: {
                enabled: false
              },
            plotOptions: {
                pie: {
                    animation: false,
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
                    color: '#ff8080',
                    y: getLan(SELECTED_LAN_ID).n_unga_kvinnor_arbetslosa
                }, {
                    name: 'Män',
                    color: '#33adff',
                    y: getLan(SELECTED_LAN_ID).n_unga_man_arbetslosa
                }]
            }]
        });

// Skapa stapel diagram för personer 
$('#columnChartArbetslosa').highcharts({
        chart: {
        style: {
                fontFamily: 'Helvetica'
                },
            animation: false,
            type: 'column'
        },
            credits: {
                enabled: false
        },
        title: {
            text: 'Arbetslösa'
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
                '<td style="padding:0"><b>{point.y:1f} pers</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                animation: false,
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Kvinnor',
            color: '#ff8080',
            data: [getLan(SELECTED_LAN_ID).n_kvinnor_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_kvinnor_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_kvinnor_studieskuld]

        }, {
            name: 'Män',
            color: '#33adff',
            data: [getLan(SELECTED_LAN_ID).n_man_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_man_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_man_studieskuld]
            }]
    });

// Skapa antal lediga jobb diagram
$('#columnChartJobb').highcharts({
        chart: {
            style: {
                    fontFamily: 'Helvetica'
        },
            animation: false,
            type: 'column'
        },
            credits: {
                enabled: false
        },
        title: {
            text: 'Lediga jobb'
        },
        xAxis: {
            categories: [
                'Lediga jobb'                      
                 ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Antal jobb'
            }
        },
        tooltip: {
                positioner: function () {
                return { x: 0, y: 0 };
            },
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:1f} pers</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                animation: false,
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Totalt',
            color: '#84e184',
            data: [getLan(SELECTED_LAN_ID).n_lediga_jobb]

        }, {
            name: 'Platsbanken',
            color: '#53c653',
            data: [getLan(SELECTED_LAN_ID).n_platsannonser]
            }]
    });
}

