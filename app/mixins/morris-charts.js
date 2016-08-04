import Ember from 'ember';

export default Ember.Mixin.create({
    simpleChart: {
        options: {
            resize: true,
            // The name of the data record attribute that contains x-values.
            xkey: 'y',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['a', 'b'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['A', 'B']
        },
    },

    donutChart: {
        data: [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales', value: 30},
            {label: 'Mail-Order Sales', value: 20}
        ],
    }

});
