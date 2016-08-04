import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
        this.controllerFor('login.login-form').setProperties({
            email: null,
            password: null,
            rememberMe: null
        });
    }
});
