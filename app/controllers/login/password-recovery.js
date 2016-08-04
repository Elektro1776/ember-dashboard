import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    breadCrumb: 'Password Recovery',
    validations: {
        email: {
            presence: { message: 'please enter a valid email address' },
            format: {
                with: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                allowBlank: false,
                message: 'please enter a valid email address'  }
        },
    },
    actions: {
        recover: function() {
            this.toast.success('OK');
        }
    }
});
