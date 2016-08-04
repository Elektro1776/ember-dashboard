import moment from 'moment';

export default Ember.Controller.extend({
    breadCrumb: 'Date Time',
    increasingValue: 0,
    active: false,

    bottomText: function() {
        return 'Value: ' + this.get('increasingValue') + ', Format: 00:00:00';
    }.property('increasingValue'),

    fireTimer: function() {
        if (this.get('active')) {
            setTimeout(this.fireTimer.bind(this), 1000);
            this.set('isFiring', true);
            this.incrementProperty('increasingValue', 1);
        }
    }.observes('active'),

    //
    // Format Dates using Momentjs.com Library Documentation:
    // http://momentjs.com
    //
    // For ember-moment component see:
    // https://github.com/stefanpenner/ember-moment
    //
    outputFormat1: 'YYYY/MM/DD',
    outputFormat2: 'YY/MM/DD HH:MM A',
    outputFormat3: 'MMMM Do YYYY',
    outputFormat4: 'h:mm:ss a',
    outputFormat5: 'MMM Do YY',
    outputFormat6: 'HH:MM A',

    date1: function() { return new Date(); }.property(),
    date2: function() { return moment().subtract(10, 'days').calendar(); }.property(),
    date3: function() { return moment().subtract(100, 'days').calendar(); }.property(),
    date4: function() { return moment().subtract(1000, 'days').calendar(); }.property(),
    date5: function() { return moment().subtract(10000, 'days').calendar(); }.property(),
    date6: function() { return moment(); }.property(),
    date7: function() { return moment().subtract(6, 'days'); }.property(),
    date8: function() { return moment().subtract(3, 'days'); }.property(),
    date9: function() { return moment().subtract(1, 'days'); }.property(),
    //

    inputFormat: '' // default for Javascript new Date() object
});
