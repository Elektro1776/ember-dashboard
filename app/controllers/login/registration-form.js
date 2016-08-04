import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
    breadCrumb: 'Registration Form',
    validations: {
        firstName: {
            presence: true
        },
        lastName: {
            presence: true
        },
        email: {
            presence: { message: 'please enter a valid email address' },
            format: {
                with: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                allowBlank: false,
                message: 'please enter a valid email address'  }
        },
        password: {
            presence: true,
            confirmation: true
        },
        passwordConfirmation: {
            presence: { message: 'please confirm password' }
        },
        terms: {
            acceptance: { message: 'you must agree to our terms to proceed'}
        }
    },

    actions: {
        register: function() {
            this.toast.success('Registration OK!');
        }
    }
});
