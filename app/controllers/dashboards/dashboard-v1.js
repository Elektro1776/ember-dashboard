import Ember from 'ember';
/* jshint unused:false */
import { getRandomData, data, totalPoints } from '../../utils/realtime';
import morrisChartsMixin from '../../mixins/morris-charts';
import  '../../utils/morris-fix';

export default Ember.Controller.extend(morrisChartsMixin, {
    breadCrumb: 'Dashboard v1',

    flotChartData: [ getRandomData() ],

    active: false,

    flotChartOptions: {
        series: {
            shadowSize: 0   // Drawing is faster without shadows
        },
        colors: ['rgba(11, 98, 164, 0.5)'],
        lines: {
            fill: true,
            fillColor: 'rgba(207, 224, 237, 0.5)',
        },
        yaxis: {
            min: 0,
            max: 100
        },
        xaxis: {
            show: false
        }
    },

    peityOptions: {
        fill: ['#3980B5'],
        width: 44
    },

    peityLargeOptions: {
        height: 36,
        width: '100%',
        fill: ['#3980B5']
    },

    showToast: function() {
        if (this.get('active')) {
            this.toast.success('Ember Dashboard Theme.', 'Welcome!', { progressBar: true, timeOut: 3000, closeButton: true, hideDuration: 500 });
        }
    }.observes('active'),

    update: function() {
        var _this = this;
        if (this.get('active')) {
            this.set('flotChartData', [getRandomData()]);
            if (this.get('plot')) {
                this.get('plot').draw();
            }
            setTimeout(this.update.bind(_this), parseInt(this.get('updateInterval')) || 30);
        }
    }.observes('active'),
});
