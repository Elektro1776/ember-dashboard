import Ember from 'ember';

export default Ember.Controller.extend({
    breadCrumb: 'Credit Card',
    cardValues : {
        number: null,
        name: null,
        expiry: null,
        cvc: null,
    },
    actions: {
        getValues: function() {
            this.toast.info('Get credit card values!');
        }
    }
});
