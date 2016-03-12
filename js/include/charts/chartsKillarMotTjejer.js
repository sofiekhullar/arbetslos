    function createCharts2() {
    $('#barChart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Skillnad mellan kvinnor och män i länet'
        },
        xAxis: {
            categories: ['Personer med studieskuld', 'Studieskuld i kronor', 'Arbetslösa alla åldrar', 'Unga arbetslösa']
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
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Män',
            color: '#0066ff',
            data: [getLan(SELECTED_LAN_ID).n_man_studieskuld,
                    getLan(SELECTED_LAN_ID).studieskuld_man,
                    getLan(SELECTED_LAN_ID).n_man_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_man_arbetslosa]
        }, {
            name: 'Kvinnor',
            color: '#ff4d4d',
            data: [getLan(SELECTED_LAN_ID).n_kvinnor_studieskuld,
                    getLan(SELECTED_LAN_ID).studieskuld_kvinnor,
                    getLan(SELECTED_LAN_ID).n_kvinnor_arbetslosa,
                    getLan(SELECTED_LAN_ID).n_unga_kvinnor_arbetslosa]
        }]
    });
};