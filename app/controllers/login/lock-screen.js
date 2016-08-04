import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    breadCrumb: 'Lock Screen',
    validations: {
        password: {
            presence: true
        }
    },
    actions: {
        unlock: function() {
            this.toast.success('OK');
        }
    }
});
