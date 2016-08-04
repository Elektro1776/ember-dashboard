import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    breadCrumb: 'Login Form',
    validations: {
        email: {
            presence: { message: 'please enter a valid email address' },
            format: {
                with: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                allowBlank: false,
                message: 'please enter a valid email address'  }
        },
        password: {
            presence: true
        }
    },
    actions: {
        login: function() {
            this.toast.success('Login OK');
        },
        invalid: function() {
            this.set('showValidation', true);
            this.toast.error('Invalid!');
        },
        registration: function() {
            this.transitionToRoute('login.registration-form');
        }
    }
});
