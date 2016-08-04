import Ember from 'ember';
import  '../../utils/morris-fix';

export default Ember.Controller.extend({
    breadCrumb: 'Charts v.3',

    defaultOptions: {
        resize: true,
        // The name of the data record attribute that contains x-values.
        xkey: 'y',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['a', 'b'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['A', 'B']
    },

    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    defaultData: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
    ],

    barsCharts2: {
        data: [
            {x: 'One Label', y: 3, z: 2, a: 1, q: 2},
            {x: 'Two Label', y: 2, z: 4, a: 1, q: 2},
            {x: 'Three Label', y: 1, z: 3, a: 1, q: 2},
            {x: 'Four Label', y: 2, z: 4, a: 1, q: 2}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['y', 'z'],
        barOpacity: 1,
        resize: true,
        gridTextColor: '#666',
        xLabelAngle: 60,
        grid: false,
        stacked: true
    },

    sinOptions: {
      element: 'graph',
      xkey: 'x',
      ykeys: ['y'],
      labels: ['sin(x)'],
      parseTime: false,
      resize: true,
      goals: [-1, 0, 1]
    },

    sinData: function() {
        var decimalData = [];
        for (var x = 0; x <= 360; x += 10) {
          decimalData.push({
            x: x,
            y: Math.sin(Math.PI * x / 180).toFixed(4)
          });
        }
        return decimalData;
    }.property(),

    nonContinuousLine: {
      element: 'graph',
      xkey: 'period',
      ykeys: ['licensed', 'sorned', 'other'],
      labels: ['Licensed', 'SORN', 'Other'],
      /* custom label formatting with `xLabelFormat` */
      xLabelFormat: function(d) { return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear(); },
      /* setting `xLabels` is recommended when using xLabelFormat */
      xLabels: 'day',
      resize: true
    },

    nonContinuousData: [
      {'period': '2012-10-01', 'licensed': 3407},
      {'period': '2012-09-30', 'sorned': 0},
      {'period': '2012-09-29', 'sorned': 618},
      {'period': '2012-09-20', 'licensed': 3246, 'sorned': 661},
      {'period': '2012-09-19', 'licensed': 3257, 'sorned': null},
      {'period': '2012-09-18', 'licensed': 3248, 'other': 1000},
      {'period': '2012-09-17', 'sorned': 0},
      {'period': '2012-09-16', 'sorned': 0},
      {'period': '2012-09-15', 'licensed': 3201, 'sorned': 656},
      {'period': '2012-09-10', 'licensed': 3215}
    ],

    multipleTypesData: function() {

        var d1 = [];
        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
        var d3 = [];
        var d4 = [];
        var d5 = [];
        var d6 = [];

        for (let i = 0; i < 14; i += 0.5) {
            d1.push([i, Math.sin(i)]);
        }
        for (let i = 0; i < 14; i += 0.5) {
            d3.push([i, Math.cos(i)]);
        }
        for (let i = 0; i < 14; i += 0.1) {
            d4.push([i, Math.sqrt(i * 10)]);
        }
        for (let i = 0; i < 14; i += 0.5) {
            d5.push([i, Math.sqrt(i)]);
        }
        for (let i = 0; i < 14; i += 0.5 + Math.random()) {
            d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
        }
        //

        return [{data: d1, lines:  { show: true, fill: true } },
                {data: d2, bars:   { show: true } },
                {data: d3, points: { show: true } },
                {data: d4, lines:  { show: true } },
                {data: d5, lines:  { show: true }, points: { show: true } },
                {data: d6, lines:  { show: true, steps: true } }];
    }.property(),

    symbolsData: function() {
        var data;

        function generate(offset, amplitude) {
            var res = [];
            var start = 0, end = 10;
            for (var i = 0; i <= 50; ++i) {
                var x = start + i / 50 * (end - start);
                res.push([x, amplitude * Math.sin(x + offset)]);
            }
            return res;
        }

        data = [
            { data: generate(2, 1.8), points: { symbol: 'circle' } },
            { data: generate(3, 1.5), points: { symbol: 'square' } },
            { data: generate(4, 0.9), points: { symbol: 'diamond' } },
            { data: generate(6, 1.4), points: { symbol: 'triangle' } },
            { data: generate(7, 1.1), points: { symbol: 'cross' } }
        ];

        return data;
    }.property(),

    symbolsOptions: {series: {points: {show: true, radius: 3 } }, grid: {hoverable: true }}
});
