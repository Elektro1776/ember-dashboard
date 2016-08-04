import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
    breadCrumb: 'Date Time Picker',
    date1: moment().format('MM/DD/YYYY'),
    date2: moment().format('MM/DD/YYYY h:mm A'),
    actions: {
        submit: function() {
            this.toast.info('Success!');
        },
        clear: function() {
            var date = Date();
            this.set('date1', moment(date).format('MM/DD/YYYY'));
            this.set('date2', moment(date).format('MM/DD/YYYY h:mm A'));
        },
        updateDate1: function(date) {
            this.set('date1', moment(date).format('MM/DD/YYYY'));
        },
        updateDate2: function(date) {
            this.set('date2', moment(date).format('MM/DD/YYYY h:mm A'));
        }
    }
});
