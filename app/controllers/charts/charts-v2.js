import Ember from 'ember';
import flotChartsMixin from '../../mixins/flot-charts';

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

export default Ember.Controller.extend(flotChartsMixin, {
    breadCrumb: 'Charts v.2',

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

    symbolsOptions: {series: {points: {show: true, radius: 3 } }, grid: {hoverable: true }},

    thresholdsData: function() {
        var d1 = [];
        for (var i = 0; i <= 60; i += 1) {
            d1.push([i, parseInt(Math.random() * 30 - 10)]);
        }
        return [ {data: d1} ];
    }.property(),

    thresholdOptions: { color: 'rgb(30, 180, 20)', threshold: {below: 0, color: 'rgb(200, 20, 30)'}, lines: {steps: true } },

    pieOptions: {
            series: {pie: { show: true, radius: 1, label: { show: true, radius: 3/4, formatter: labelFormatter, background: {opacity: 0.5 } } } },
            legend: {show: false
        }
    },

    pieData: function() {
        var data = [],
            series = Math.floor(Math.random() * 6) + 3;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: 'Series' + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            };
        }
        return data;
    }.property(),

    pieOptions2: {
            series: {pie: { show: true, radius: 1, label: { show: true, radius: 3/4, formatter: labelFormatter, background: {opacity: 0.5 } } } },
            legend: {show: false
        }
    },

    pieData2: function() {
        var data = [],
            series = Math.floor(Math.random() * 4) + 2;

        for (var i = 0; i < series; i++) {
            data[i] = {
                label: 'Series' + (i + 1),
                data: Math.floor(Math.random() * 100) + 1
            };
        }
        return data;
    }.property()

});
