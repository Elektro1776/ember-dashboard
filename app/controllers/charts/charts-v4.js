import Ember from 'ember';
import  '../../utils/morris-fix';

export default Ember.Controller.extend({
    breadCrumb: 'Charts v.4',

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

    doutData: [
        {label: 'Download Sales', value: 12},
        {label: 'In-Store Sales', value: 30},
        {label: 'Mail-Order Sales', value: 20}
    ],

    behaveLikeLineOptions: {
      behaveLikeLine: true,
      resize: true,
      data: [
            {x: '2011 Q1', y: 3, z: 3},
            {x: '2011 Q2', y: 2, z: 1},
            {x: '2011 Q3', y: 2, z: 4},
            {x: '2011 Q4', y: 3, z: 3}
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z']
    }
});
