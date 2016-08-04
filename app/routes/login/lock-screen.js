import Ember from 'ember';

export default Ember.Route.extend({
    activate: function() {
        this.controllerFor('login.lock-screen').setProperties({
            password: null
        });
    }
});
