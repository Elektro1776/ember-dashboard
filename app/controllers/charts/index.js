import Ember from 'ember';
import  '../../utils/morris-fix';
import flotChartsMixin from '../../mixins/flot-charts';
import chartsjsChartsMixin from '../../mixins/chartsjs-charts';

export default Ember.Controller.extend(flotChartsMixin, chartsjsChartsMixin, {
    defaultOptions: {
        resize: true,
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['A', 'B']
    },

    defaultData: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
    ],

    peityOptions: {
        width: 80
    }
});
