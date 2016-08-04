import Ember from 'ember';

/* jshint unused:false */
import { getRandomData, data, totalPoints } from '../../utils/realtime';

export default Ember.Controller.extend({
    breadCrumb: 'Flot Charts',

    updateInterval: 30,

    data: [ getRandomData() ],

    active: false,

    options: {
            series: {
                shadowSize: 0   // Drawing is faster without shadows
            },
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                show: false
            }
        },

    optionsColor: {
            series: {
                shadowSize: 1   // Drawing is faster without shadows
            },
            lines: {
                fill: true, color: '#e3e3e3'
            },
            yaxis: {
                min: 0,
                max: 100,
                color: '#e3e3e3'
            },
            xaxis: {
                show: false
            },
            grid: {
                backgroundColor: {
                    colors: ['#fff', '#e4f4f4']
                },
                borderColor: '#e3e3e3'
            }
        },

    update: function() {
        var _this = this;
        if (this.get('active')) {
            this.set('data', [getRandomData()]);
            if (this.get('plot')) {
                this.get('plot').draw();
            }
            setTimeout(this.update.bind(_this), parseInt(this.get('updateInterval')) || 30);
        }
    }.observes('active'),

});
