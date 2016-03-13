    function createCharts2() {
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
};