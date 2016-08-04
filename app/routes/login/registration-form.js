import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
        this.controllerFor('login.registration-form').setProperties({
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            passwordConfirmation: null,
            terms: null
        });
    }
});
