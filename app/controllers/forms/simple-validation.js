import Ember from 'ember';
import EmberValidations from 'ember-validations';

    const male = {name: 'Male', id: 1},
        female = {name: 'Female', id: 2},
        select = {name: 'Select gender', id: 0};

export default Ember.Controller.extend(EmberValidations, {
    breadCrumb: 'Simple Validation',
    showValidation: false,
    formLayout: 'vertical',
    genderChoices: [select, male, female],
    // Form Model
    //
    name: '',
    email: '',
    age: null,
    gender: null,
    password: null,
    passwordConfirmation: null,
    terms: false,
    //

    validations: {
        'name': { presence: { message: 'please enter your name'} },
        'email': {
            presence: { message: 'please enter a valid email address' },
            format: {
                with: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                allowBlank: false,
                message: 'please enter a valid email address'  }
        },
        'age': {
            numericality: true
        },
        terms: {
            acceptance: { message: 'you must agree to our terms to proceed'}
        },
        gender: {
            presence: { message: 'you must select gender'},
            inclusion: { in: [male, female], message: 'you must select gender'},
        },
        password: {
            presence: true,
            confirmation: true
        },
        passwordConfirmation: {
            presence: { message: ' please confirm password' }
        }
    },

    actions: {
        submit: function() {
            this.set('showValidation', true);
            this.toast.success('Success!');
        },
        invalid: function() {
            this.set('showValidation', true);
            this.toast.error('Invalid!');
        },
        clear: function() {
            this.setProperties({
                showValidation: false,
                name: '',
                email: '',
                age: null,
                gender: null,
                password: null,
                passwordConfirmation: null,
                terms: false
            });
        }
    }
});
