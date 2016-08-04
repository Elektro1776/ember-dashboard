import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Input Masks',
    phone: null,
    creditcard: null,
    isPhoneEmpty: function() {
        if (this.get('phone')) {
            return this.get('phone').replace(/[^0-9]/g, '').length === 0;
        } else {
            return true;
        }
    }.property('phone'),
    isCreditCardEmpty: function() {
        if (this.get('creditcard')) {
            return this.get('creditcard').replace(/-| /g, '').length === 0;
        } else {
            return true;
        }
    }.property('creditcard'),

    actions: {
        submit: function() {
            this.toast.info('Success!');
        },
        clear: function() {
            this.setProperties({
                phone: null,
                creditcard: null,
                zip: null,
                yearShort: null,
                yearLong: null,
                ssn: null
            });
        }
    }
});
