export default Ember.Controller.extend({
    breadCrumb: 'Metrics',
    pieOptions: {
            series: {pie: { show: true, radius: 1, label: { show: false } },
            legend: {show: false}
        }
    },
    pieData: [
        { label: 'Series 1', data: '30' },
        { label: 'Series 2', data: '30' },
        { label: 'Series 3', data: '40' }
    ],
    lineOptions: {
        series: {
            lines: { show: true, fill: true, fillColor: 'rgba(200, 200, 25, 0.5)'}
        },
        legend: { show: false },
        xaxis: { show: false },
        grid: {
            borderWidth: 0
        }
    },
    lineData: [
        { label: 'Foo', data: [ [1, 2], [2, 4], [3, 2], [4, 5] ] }
    ]
});
